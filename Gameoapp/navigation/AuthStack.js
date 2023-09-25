import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnbardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" component={OnbardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
