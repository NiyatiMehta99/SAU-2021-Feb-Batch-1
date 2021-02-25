import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import AddNote from "./components/addNote";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="AddNote" component={AddNote}/>
      </Stack.Navigator>
    </NavigationContainer>
    //<Dashboard />
    //<AddNote/>
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
