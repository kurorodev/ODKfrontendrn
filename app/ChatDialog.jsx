import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WS_URL = 'ws://192.168.1.7:8001/ws';

export default function ChatDialog() {
    const { chatId, chatName } = useLocalSearchParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [membersModalVisible, setMembersModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [members, setMembers] = useState([]);
    const [memberCount, setMemberCount] = useState(0);
    const flatListRef = useRef(null);
    const websocket = useRef(null);

    useEffect(() => {
        fetchMemberCount();
        fetchChatMembers();
        connectWebSocket();

        return () => {
            if (websocket.current) {
                websocket.current.close();
            }
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 3000);

        return () => clearTimeout(timer);
    }, [messages]);

    const fetchMemberCount = async () => {
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`http://192.168.1.7:8001/chats/${chatId}/members/count?token=${token}`, {
            headers: {
                //Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        //console.log(data.count)
        setMemberCount(`Кол-во участников: ${data.count}`);
    };

    const fetchChatMembers = async () => {
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`http://192.168.1.7:8001/chats/${chatId}/members?token=${token}`, {
            headers: {
                //Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        setMembers(data);
    };

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
                <TouchableOpacity onPress={() => setMembersModalVisible(true)}>
                    <Text style={styles.memberCount}>{memberCount}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{chatName}</Text>
                <TouchableOpacity
                    style={styles.addUserButton}
                    onPress={() => setSearchModalVisible(true)}
                >
                    <Text style={styles.addUserButtonText}>+ Add User</Text>
                </TouchableOpacity>
            </View>

            {/* Список участников */}
            <Modal
                visible={membersModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Chat Members</Text>
                        <FlatList
                            data={members}
                            renderItem={({ item }) => (
                                <Text style={styles.memberItem}>{item.username}</Text>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setMembersModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Добавление пользователя */}
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
                                        const response = await fetch(`http://192.168.1.7:8001/users/search/${text}`, {
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
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
                                            await fetch(`http://192.168.1.7:8001/chats/${chatId}/participants/?username=${item.username}`, {
                                                method: 'POST',
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            });
                                            setSearchModalVisible(false);
                                            setSearchQuery('');
                                            setSearchResults([]);
                                            fetchMemberCount(); // Обновляем количество участников
                                            fetchChatMembers(); // Обновляем список участников
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

            {/* Сообщения */}
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
    );}
const styles = StyleSheet.create({
    memberCount: {
        fontSize: 14,
        color: '#007AFF',
        fontFamily: 'Montserrat'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    memberItem: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
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
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row', // Горизонтальное расположение элементов
        alignItems: 'center', // Вертикальное центрирование
        justifyContent: 'space-between', // Разделить элементы по краям
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