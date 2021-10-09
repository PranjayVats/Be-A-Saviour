import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./screens/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeUser from "./screens/HomeUser";
import HomeVolunteer from "./screens/HomeVolunteer";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Sawo from 'react-native-sawo';
import SOS from "./components/SOS";
import VolLoc from "./components/VolLoc";
import LoginScreen from "./screens/LoginScreen";
import Upload from "./screens/Upload";



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Sawo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeUser"
            component={HomeUser}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SOS"
            component={SOS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeVolunteer"
            component={HomeVolunteer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VolLoc"
            component={VolLoc}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Upload"
            component={Upload}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: getStatusBarHeight(),
  },
});
