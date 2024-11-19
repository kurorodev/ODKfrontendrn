import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function InfoCard({ title, icon, arrowIcon, backgroundColor, textColor }) {
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: textColor }]}>{title}</Text>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.cardIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: arrowIcon }}
          style={styles.arrowIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    display: 'flex',
    marginTop: 24,
    width: '100%',
    paddingHorizontal: 22,
    paddingTop: 6,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '900',
    letterSpacing: 0.01,
    alignSelf: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 39,
  },
  cardIcon: {
    position: 'relative',
    display: 'flex',
    width: 84,
    flexShrink: 0,
    aspectRatio: 1.38,
  },
  arrowIcon: {
    position: 'relative',
    display: 'flex',
    width: 8,
    flexShrink: 0,
    aspectRatio: 0.57,
  },
});

export default InfoCard;