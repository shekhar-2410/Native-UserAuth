import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const CustomeDrawerScreen = (props) => {
  const { logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userInfo = await AsyncStorage.getItem("userInfo");
        if (userInfo !== null) {
          setUserName(userInfo);
        }
      } catch (error) {
        console.error("Error fetching user name: ", error);
      }
    };
    fetchUserName();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6",marginBottom:12 }}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 30, marginTop: -20 }}
        >
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            {userName.toUpperCase()}
          </Text>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            280 💎Coins
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 28, borderWidth: 1, borderColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <AntDesign name="sharealt" size={22} color="blue" />
            {/* Replace "sharealt" with the name of the desired AntDesign icon */}
            <Text style={{ fontSize: 16 }}>Tell your friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <AntDesign name="logout" size={22} color="red" />
            {/* Replace "logout" with the name of the desired AntDesign icon */}
            <Text style={{ fontSize: 16 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomeDrawerScreen;

const styles = StyleSheet.create({});
