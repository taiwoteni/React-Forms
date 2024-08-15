import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function App() {
  return (
  <ImageBackground
  source={require('./assets/plants.jpg')}
  style={styles.background}
  >
  <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  </ImageBackground>

  );
}

const styles = StyleSheet.create({
background:{
flex: 1,
     resizeMode: 'cover', // or 'contain'
     justifyContent: 'center'
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
