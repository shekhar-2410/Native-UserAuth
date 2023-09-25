import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const KartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Shopping Kart</Text>
      <View style={styles.product}>
        <Text style={styles.productName}>Product 1</Text>
        <Text style={styles.productPrice}>$10.99</Text>
      </View>
      <View style={styles.product}>
        <Text style={styles.productName}>Product 2</Text>
        <Text style={styles.productPrice}>$19.99</Text>
      </View>
      {/* Add more products as needed */}
      <Button
        title="Checkout"
        onPress={() => alert("Checkout button pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default KartScreen;
