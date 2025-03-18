
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/login";  // Adjust path based on your structure
import OtpScreen from "../screens/otp";  // Adjust path based on your structure
import Home1 from "../screens/home1"; 
import Home2 from "../screens/home2"; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <Stack.Screen name="OtpScreen" component={OtpScreen} /> */}
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
      </Stack.Navigator>

  );
}

