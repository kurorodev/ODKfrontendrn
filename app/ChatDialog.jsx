import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WS_URL = 'ws://192.168.1.3:8001/ws';

export default function ChatDialog() {
    const { chatId, chatName } = useLocalSearchParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const flatListRef = useRef(null);
    const websocket = useRef(null);

    useEffect(() => {
        connectWebSocket();
        return () => {
            if (websocket.current) {
                websocket.current.close();
            }
        };
    }, []);

    useEffect(() => {
        // Прокрутка вниз при изменении сообщений
        const timer = setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 3000); // Задержка в 100 мс

        return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }, [messages]);

    const connectWebSocket = async () => {
        const token = await AsyncStorage.getItem('jwtToken');
        if (token) {
            const wsWithToken = `${WS_URL}?token=${token}&chat=${chatId}`;
            websocket.current = new WebSocket(wsWithToken);

            websocket.current.onopen = () => {
                console.log(`WebSocket connected to chat ${chatId}`);
            };

            websocket.current.onmessage = (event) => {
                handleNewMessage(event.data);
            };

            websocket.current.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
        }
    };

    const handleNewMessage = (newMessage) => {
        const [username, content] = newMessage.split(': ');
        setMessages((prevMessages) => [...prevMessages, { username, content }]);
    };

    const sendMessage = () => {
        if (message.trim() && websocket.current?.readyState === WebSocket.OPEN) {
            websocket.current.send(message);
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{chatName}</Text>
                <TouchableOpacity 
                    style={styles.addUserButton}
                    onPress={() => setSearchModalVisible(true)}
                >
                    <Text style={styles.addUserButtonText}>+ Add User</Text>
                </TouchableOpacity>
            </View>


            <Modal
                visible={searchModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={async (text) => {
                                setSearchQuery(text);
                                if (text.length >= 2) {
                                    try {
                                        const token = await AsyncStorage.getItem('jwtToken');
                                        const response = await fetch(`http://192.168.1.3:8001/users/search/${text}`, {
                                            headers: {
                                                'Authorization': `Bearer ${token}`
                                            }
                                        });
                                        const data = await response.json();
                                        setSearchResults(data);
                                    } catch (error) {
                                        console.error('Error searching users:', error);
                                    }
                                }
                            }}
                            placeholder="Search users..."
                        />
                        <FlatList
                            data={searchResults}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    style={styles.searchResultItem}
                                    onPress={async () => {
                                        try {
                                            const token = await AsyncStorage.getItem('jwtToken');
                                            await fetch(`http://192.168.1.3:8001/chats/${chatId}/participants/?username=${item.username}`, {
                                                method: 'POST',
                                                headers: {
                                                    //'Authorization': `Bearer ${token}`,
                                                    'Content-Type': 'application/json',
                                                },
                                                //body: JSON.stringify({ username: item.username })
                                            });
                                            setSearchModalVisible(false);
                                            setSearchQuery('');
                                            setSearchResults([]);
                                        } catch (error) {
                                            console.error('Error adding participant:', error);
                                        }
                                    }}
                                >
                                    <Text style={styles.searchResultText}>{item.username}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                        <TouchableOpacity 
                            style={styles.closeButton}
                            onPress={() => {
                                setSearchModalVisible(false);
                                setSearchQuery('');
                                setSearchResults([]);
                            }}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
            <FlatList
                ref={flatListRef}
                style={styles.messageList}
                data={messages}

                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.messageText}>{item.content}</Text>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Введите сообщение..."
                    placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Отправить</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        maxHeight: '80%',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    searchResultItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    searchResultText: {
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#FF3B30',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addUserButton: {
        backgroundColor: '#007AFF',
        padding: 8,
        borderRadius: 8,
        marginLeft: 10,
    },
    addUserButtonText: {
        color: 'white',
        fontSize: 14,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#E9F2FF',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#152640',
    },
    messageList: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#152640',
    },
    messageText: {
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#E9E9E9',
    },
    input: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#152640',
        borderRadius: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
});
