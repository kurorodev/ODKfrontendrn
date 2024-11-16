import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ChatItem = ({ name, message, time, unreadCount, isRead }) => {
  return (
    <View style={styles.chatItemContainer}>
      <View style={styles.chatInfo}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <View style={styles.chatMeta}>
        {isRead ? (
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c44fcc5b41505658a9859807dea55023afdd6fbbad412d2f27b1f2b264b50cf0?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
            style={styles.readIcon}
            resizeMode="contain"
          />
        ) : null}
        <Text style={styles.timeText}>{time}</Text>
        {unreadCount ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{unreadCount}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  chatInfo: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(22, 39, 65, 1)',
  },
  messageText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(22, 39, 65, 1)',
    marginTop: 6,
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  readIcon: {
    width: 15,
    aspectRatio: 1,
    marginBottom: 2,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(22, 39, 65, 1)',
  },
  unreadBadge: {
    backgroundColor: 'rgba(133, 160, 198, 1)',
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  unreadCount: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ChatItem;
