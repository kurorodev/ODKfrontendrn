import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import ChatItem from './ChatItem';

const chatData = [
  { id: 1, name: 'Мария', message: 'Какой график у тебя?', time: '14:33', unreadCount: 1 },
  { id: 2, name: 'Александр', message: 'Сегодня был на...', time: '11:24', unreadCount: 2 },
  { id: 3, name: 'Морозов', message: 'Тебя отметили', time: '09:52', isRead: true },
  { id: 4, name: 'Александр', message: '👍🏻👍🏻', time: 'Вчера', isRead: true },
  { id: 5, name: 'Екатерина️', message: 'Хорошо!!!🐶', time: 'Вчера', isRead: true },
  { id: 6, name: 'Лилия', message: '💜', time: 'Вчера', isRead: true },
  { id: 7, name: 'Евгения', message: '🤣🤣🤣🤣', time: '20/10/24', isRead: true },
];

const ChatList = () => {
  return (
    <View style={styles.chatListContainer}>
      <ScrollView horizontal style={styles.avatarScroll}>
        {chatData.map((chat) => (
          <Image
            key={chat.id}
            source={{ uri: `http://b.io/ext_${chat.id + 4}-` }}
            style={styles.avatarImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
      <View style={styles.chatItemsContainer}>
        {chatData.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatListContainer: {
    marginTop: 26,
  },
  avatarScroll: {
    flexDirection: 'row',
  },
  avatarImage: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 26,
  },
  chatItemsContainer: {
    marginTop: 4,
  },
});

export default ChatList;
