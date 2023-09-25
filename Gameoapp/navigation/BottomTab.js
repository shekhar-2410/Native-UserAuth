import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScren";
import KartScreen from "../screens/KartScreen";
import LikeScreen from "../screens/LikeScreen";
const BottomTabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#C54B5A",
          paddingVertical:4
        },
        tabBarInactiveTintColor: "#D7D7D7",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={KartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "#fff" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      {/* Add more tab screens as needed */}
    </Tab.Navigator>
  );
};

export default BottomTabStack;
