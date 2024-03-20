import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../Components/PrimaryButton";

const Startgame = () => {
  const [number, setNumber] = React.useState("");

  function handleSubmit() {
    const inputNumber = parseInt(number);
    if (
      isNaN(inputNumber) ||
      inputNumber < 0 ||
      inputNumber > 100 
    ) {
      Alert.alert("Invalid Number", "Number has to be between 0-99", [
        { text: "Okay!", style: "destructive", onPress: () => setNumber("") },
      ]);
      return;
    }
    console.log("Next screen");
  }
  return (
    <View style={styles.gameContainer}>
      <LinearGradient
        style={styles.inputContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#E01C34", "#B91372"]}
      >
        <Text style={styles.header}>Enter a Number between 0-99</Text>
        <TextInput
          style={styles.textInputBox}
          maxLength={2}
          keyboardType="number-pad"
          value={number}
          onChangeText={(inputText) => setNumber(inputText)}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton functionCall={handleSubmit}>Submit</PrimaryButton>
          <PrimaryButton functionCall={() => setNumber("")}>
            Reset
          </PrimaryButton>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    marginTop: 15,
    flex: 1,
    width: "100%",
    borderWidth: 2,
    borderColor: "orange",
  },
  inputContainer: {
    padding: 20,
    gap: 20,
    borderRadius: 10,
    margin: 30,
    marginHorizontal: 20,
    elevation: 7,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  textInputBox: {
    borderColor: "lightgreen",
    fontWeight: "bold",
    color: "white",
    borderBottomWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    width: 50,
    fontSize: 30,
    marginLeft: 4,
  },
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Startgame;
