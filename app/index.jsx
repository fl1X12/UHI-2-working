import { Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SchedulePage from "../screens/SchedulePage";
import Appointment from "../screens/Appointment";
import QRLogin from "../screens/QRLogin";
import DigitalTwin from "../screens/DigitalTwin";
import History from "../screens/History";

const Stack=createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SchedulePage" component={SchedulePage}/>
      <Stack.Screen name="Appointment" component={Appointment}/>
      <Stack.Screen name="QRLogin" component={QRLogin}/>
      <Stack.Screen name="DT" component={DigitalTwin}/>
      <Stack.Screen name="History" component={History}/>
    </Stack.Navigator>
  );
}
