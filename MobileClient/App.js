import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Componentes 
import Login from  './Components/Login/Login'
import Home from './Components/Login/Home'
import Validate from './Components/Validar/Validate'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component ={Login} options={{title:"Brigadista", headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{title: "Inicio", headerShown: false}}/>
        <Stack.Screen name="Validate" component={Validate} options={{title: "Validar", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

