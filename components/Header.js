import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View testID="cabecera" style={styles.headerContainer}>
      <Text testID="mensaje" style={styles.mensaje}> NuevoLukin </Text>
      <Image testID="logo" source={require('../assets/inbox.png')} style={styles.logo} />
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
  logo: {
    width: 50, 
    height: 50,
  },
  mensaje: {
    fontSize: 20,
    textAlign: 'left', // Changed to left
    fontWeight: 'bold',
  },
};
