import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Startgame from "./Screens/Startgame";
import GameScreen from "./Screens/GameScreen";
import React from "react";
export default function App() {
  const [screen, setScreen] = React.useState(<Startgame onConfirmInput={confirmInput} />);

  function confirmInput(inputNumber) {
    console.log("game Screen loading", inputNumber)
    setScreen(<GameScreen inputNumber={inputNumber} />); 
  }
  return (
    <LinearGradient
      colors={["orange", "pink",]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/tree.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.25 }}
      >
        {screen}
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "red",
  },
});
