import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import MyTabs from "./BottomTab";
import SplashScreen from "./views/SplashScreen";

import Register from './views/Register';
import Signin from './views/Signin';
import MyTabs from './BottomTab';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: true}} />
      <Stack.Screen name="App" component={MyTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
