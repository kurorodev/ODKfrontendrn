import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'; // Импортируйте useFocusEffect

export default function ChatListScreen() {
    const [chats, setChats] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [newChatName, setNewChatName] = useState('');

    // Используйте useFocusEffect для обновления списка чатов
    useFocusEffect(
        React.useCallback(() => {
            fetchChats();
        }, [])
    );

    const fetchChats = async () => {
        try {
            const token = await AsyncStorage.getItem('jwtToken');
            const response = await fetch(`http://192.168.1.3:8001/chats/?token=${token}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            });
            const data = await response.json();
            setChats(data);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    const createNewChat = async () => {
        if (!newChatName.trim()) {
            Alert.alert('Ошибка', 'Введите название чата');
            return;
        }

        try {
            const token = await AsyncStorage.getItem('jwtToken');
            const response = await fetch(`http://192.168.1.3:8001/chats/?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newChatName.trim()
                })
            });

            if (response.ok) {
                setNewChatName('');
                setIsCreating(false);
                fetchChats(); // Обновляем список чатов
            } else {
                Alert.alert('Ошибка', 'Не удалось создать чат');
            }
        } catch (error) {
            console.error('Error creating chat:', error);
            Alert.alert('Ошибка', 'Произошла ошибка при создании чата');
        }
    };

    const handleChatPress = (chatId, chatName) => {
        router.push({
            pathname: '/ChatDialog',
            params: { chatId, chatName }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Чаты</Text>
                <TouchableOpacity 
                    style={styles.createButton}
                    onPress={() => setIsCreating(true)}
                >
                    <Text style={styles.createButtonText}>+ Новый чат</Text>
                </TouchableOpacity>
            </View>


            {isCreating && (
                <View style={styles.createChatContainer}>
                    <TextInput
                        style={styles.input}
                        value={newChatName}
                        onChangeText={setNewChatName}
                        placeholder="Название чата"
                        placeholderTextColor="#666"
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[styles.button, styles.createButton]}
                            onPress={createNewChat}
                        >
                            <Text style={styles.buttonText}>Создать</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => {
                                setIsCreating(false);
                                setNewChatName('');
                            }}
                        >
                            <Text style={styles.buttonText}>Отмена</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            
            <FlatList
                data={chats}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.chatItem}
                        onPress={() => handleChatPress(item.id, item.name)}
                    >
                        <Text style={styles.chatName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    createButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
    createChatContainer: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#FF3B30',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#152640',
    },
    chatItem: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#E9F2FF',
        marginBottom: 10,
    },
    chatName: {
        fontSize: 16,
        color: '#152640',
        fontWeight: '500',
    },
});