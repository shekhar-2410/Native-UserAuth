import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const LikeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Liked Items</Text>
      <View style={styles.product}>
        <Image
          source={require("../assets/images/FarCry6.png")} // Add your image source
          style={styles.productImage}
        />
        <Text style={styles.productName}>Product 1</Text>
      </View>
      <View style={styles.product}>
        <Image
          source={require("../assets/images/god-of-war.jpeg")} // Add your image source
          style={styles.productImage}
        />
        <Text style={styles.productName}>Product 2</Text>
      </View>
      {/* Add more liked items as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
  },
});

export default LikeScreen;
