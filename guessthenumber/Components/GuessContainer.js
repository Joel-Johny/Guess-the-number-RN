import React from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GuessContainer = ({ children, value }) => {
  return (
    <LinearGradient
      style={styles.guessContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#E01C34", "#B91372","lightblue"]}
    >
      <Text style={styles.guessText}>{children}</Text>
      <Text style={styles.guessNumber}>{value}</Text>
    </LinearGradient>
  );
};

export default GuessContainer;

const styles = StyleSheet.create({
guessContainer: {
    padding: 20,
    marginHorizontal:25,
    borderWidth: 3,
    borderColor: "red",
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
  },
  guessText: {
    fontSize: 20,
    color: "white",
  },
  guessNumber: {
    fontSize: 20,
    marginHorizontal: 8,
    color: "white",
  },
});
