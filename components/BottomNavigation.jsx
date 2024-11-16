import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BottomNavigation = () => {
  const navItems = [
    {
      id: 'home',
      source: { uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a489454efdcb16cde405b71150a3425e1551856fe182340fa0275068b2c4c72?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
    },
    {
      id: 'schedule',
      source: { uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/848aa49f122b4b97e611ef6a978b3a488748e9a44320b882cfb0acbe76d30075?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
    },
    {
      id: 'chat',
      source: { uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0cb90bd103de86114858ebbe7d5d0c09b984ada4c35d78cf8f27f6ccb745aa83?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
    },
    {
      id: 'profile',
      source: { uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4572572b2f57722ce6c780ca68de04a22f6993fbf296b31960920a8dc715020f?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
    },
    {
      id: 'more',
      source: { uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2309fd2cef4d7ff94301bfd565ed65bd0145aab280fa651df5515c14a351a37?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
    },
  ];

  return (
    <View style={styles.bottomNavContainer}>
      {navItems.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => console.log(`${item.id} pressed`)}>
          <Image
            accessibilityLabel={`${item.id} navigation icon`}
            resizeMode="contain"
            source={item.source}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    borderRadius: 20,
    alignSelf: 'stretch',
    display: 'flex',
    marginTop: 87,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 17,
    paddingBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navIcon: {
    position: 'relative',
    display: 'flex',
    width: 30,
    height: 30,
    flexShrink: 0,
  },
});

export default BottomNavigation;
