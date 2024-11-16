import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const HeaderMainMenu = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/65fdb1995dc140d08a5c47f604771c3e/2c0526856b8f68c80da301c2abce7bb980e216727113e8ab356c2115704bc18c?apiKey=65fdb1995dc140d08a5c47f604771c3e&" }}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Company Logo"
      />
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/65fdb1995dc140d08a5c47f604771c3e/730d224971accf1cac5ac850ee5d9cd455891287c5315573c376a1aacea94818?apiKey=65fdb1995dc140d08a5c47f604771c3e&" }}
        style={styles.searchIcon}
        resizeMode="contain"
        accessibilityLabel="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 308,
    paddingHorizontal: 23,
  },
  logo: {
    width: 200,
    height: 144,
    borderRadius: 20,
  },
  searchIcon: {
    width: 33,
    height: 33,
    marginTop: 8,
  },
});

export default HeaderMainMenu;
