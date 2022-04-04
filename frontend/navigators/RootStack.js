import React from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import Welcome from "../screens/Welcome/Welcome";
import Users from "../screens/Users/Users";

import { Colors } from "../styles/global/styles.components";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: Colors.tertiary,
          headerTransparent: true,
          headerTitle: "",
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen
          options={{ headerTintColor: Colors.primary }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
