import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NewMusic({ props, onPress }) {
  return (
    <View style={styles.musicContainer}>
      <View stlye={styles.musicNameContainer}>
        <Text style={styles.musicName}>{props.item}</Text>
      </View>

      <View style={styles.deleteIconContainer}>
        <TouchableOpacity onPress={() => onPress(props.id)}>
          <Feather style={styles.deleteIcon} name="x" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },

  musicName: {
    fontSize: 16,
    color: "#577D86",
    fontWeight: "bold",
  },

  deleteIconContainer: {
    justifyContent: "center",
    marginLeft: 5,
    padding: 10,
  },

  deleteIcon: {
    color: "red",
  },
});
