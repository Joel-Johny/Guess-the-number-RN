import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Startgame from "./Screens/Startgame";
import GameScreen from "./Screens/GameScreen";
import React from "react";
import GameOver from "./Screens/GameOver";
export default function App() {
  const [screen, setScreen] = React.useState(
    <Startgame onConfirmInput={confirmInput} />
  );

  function confirmInput(inputNumber) {
    console.log("game Screen loading", inputNumber);
    setScreen(()=><GameScreen inputNumber={inputNumber} setScreen={setScreen} />);
  }
  return (
    <LinearGradient colors={["orange", "pink"]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/tree.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.25 }}
        style={styles.image}
      >
        {/* {screen} */}
        <SafeAreaView style={{flex:1}}>{screen}</SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    borderWidth: 3,
    borderColor: "red",
  },
  image:{
    height:"100%",
    width:"100%"
  }
});
