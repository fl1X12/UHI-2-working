import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler"; // Ensure it's imported at the top

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import SchedulePage from "../screens/SchedulePage";
import Appointment from "../screens/Appointment";
import QRLogin from "../screens/QRLogin";
import DigitalTwin from "../screens/DigitalTwin";
import History from "../screens/History";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator (Contains Home & Schedule)
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SchedulePage" component={SchedulePage} />
      <Drawer.Screen name="QRLogin" component={QRLogin} />
      <Drawer.Screen name="DT" component={DigitalTwin} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}


// Root App Component
export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="SchedulePage" component={SchedulePage} />
      <Stack.Screen name="QRLogin" component={QRLogin} />
      <Stack.Screen name="DT" component={DigitalTwin} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}
