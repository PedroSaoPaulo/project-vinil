import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.appHeader}>
      <View style={styles.appIconContainer}>
        <FontAwesome
          style={styles.appIcon}
          name="music"
          size={28}
          color="black"
        />
      </View>

      <View style={styles.appNameContainer}>
        <Text style={styles.appName1}>Vinil </Text>
        <Text style={styles.appName2}>App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: "row",
    marginTop: 30,
  },

  appIconContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  appIcon: {
    color: "#569DAA",
  },

  appNameContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  appName1: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#577D86",
  },

  appName2: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#569DAA",
  },
});
