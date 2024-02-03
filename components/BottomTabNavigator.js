import React from 'react';
import { View, Text, Image } from 'react-native';

export default function BottomTabNavigator() {
  return (
    <View testID="bottomTabNavigator" style={styles.headerContainer}>
      <Image testID="home" source={require('../assets/home.png')} style={styles.icons} />
      <Image testID="clothes" source={require('../assets/clothes.png')} style={styles.icons} />
      <Image testID="outfits" source={require('../assets/outfits.png')} style={styles.icons} />
      <Image testID="shopping" source={require('../assets/shopping.png')} style={styles.icons} />
    </View>
  );
}

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#A25D06',
  },
  icons: {
    width: 80, 
    height: 80,
  },
};
