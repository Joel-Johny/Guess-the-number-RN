import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const GameOver = ({ userGuess, computerGuess, tries }) => {
  console.log(userGuess, computerGuess, tries)
  return (
    <View>
      <Text>Hello</Text>
      <Text>{userGuess}</Text>
      <Text>{computerGuess}</Text>
      <Text>{tries}</Text>
    </View>
  );
};

export default GameOver;
