import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ListItme = ({ title, subtitle, poster, isFree, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.imagestyle} source={poster} />
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              textTransform: "uppercase",
              marginTop:7
            }}
          >
            {title}
          </Text>
          <Text>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.rateContiner}>
        <Text style={{ textAlign: "center", marginTop: 10, color: "#fff" }}>
          {price ? price : isFree}
        </Text>
      </View>
    </View>
  );
};

export default ListItme;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  imagecontainer: {
    flexDirection: "row",
    gap: 2,
  },
  imagestyle: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  rateContiner: {
    textAlign: "center",
    backgroundColor: "#047e87",
    width: 80,
    height: 40,
    borderRadius: 8,
    elevation: 4,
  },
});
