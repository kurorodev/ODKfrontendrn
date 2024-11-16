import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import FavoriteSection from '../../components/FavoriteSection';
import ChatList from '../../components/ChatList';

const ChatScreen = () => {
  return (
    <View style={styles.chatContainer}>
      <ScrollView>
        <Header />
        <FavoriteSection />
        <ChatList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    paddingBottom: 40,
  },
});

export default ChatScreen;
