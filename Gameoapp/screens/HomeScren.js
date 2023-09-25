import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { sliderData } from "../modal/data";
import ToggleButton from "../component/CustomeSwitch";
import ListItme from "../component/ListItme";
import { freeGames, paidGames } from "../modal/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScren = ({ navigation }) => {
  const [gameTab, setgameTab] = useState(1);
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
  const onSelected = (value) => {
    setgameTab(value);
  };
  StatusBar.setBarStyle("dark");
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer()); // Open the drawer
  };
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={styles.imageContainer}>
          <Text style={styles.userName}> {userName.toUpperCase()}</Text>
          <View style={{ elevation: 4 }}>
            <TouchableOpacity onPress={openDrawer}>
              <Image
                style={styles.imageback}
                source={require("../assets/images/user-profile.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputConatiner}>
          <Feather name="search" size={21} color={"#C6C6C6"} />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.userName}>Upcoming Games</Text>
          <Pressable onPress={() => {}}>
            <Text style={{ color: "#C54B5A", fontSize: 18 }}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          data={sliderData}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View>
          <ToggleButton
            options1={"Free to play"}
            options2={"Paid Games"}
            selectionMode={1}
            onSelected={onSelected}
          />
        </View>
        {gameTab === 1 &&
          freeGames.map((item) => (
            <ListItme
              key={item.id}
              poster={item.poster}
              title={item.title}
              subtitle={item.subtitle}
              price={item.isFree}
            />
          ))}
        {gameTab === 2 &&
          paidGames.map((item) => (
            <ListItme
              key={item.id}
              poster={item.poster}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScren;

const styles = StyleSheet.create({
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  imageback: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  inputConatiner: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#C6C6C6",
    padding: 8,
    borderRadius: 10,
    width: "96%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 8,
  },

  // Add these styles for the carousel
  carouselItem: {
    marginRight: 10,
    paddingHorizontal: 8,
  },
  carouselImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  backgroundImage: {
    flex: 1,
  },
});
