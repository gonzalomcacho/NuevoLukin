import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "./Header.js";
import BottomTabNavigator from "./BottomTabNavigator.js";
import CONFIG from "./config/config";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    return (
        <View  id="main"style={styles.homeContainer}>
          <Header />
          <BottomTabNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1, // Added to take full height
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });