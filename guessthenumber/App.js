import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Startgame from "./Screens/Startgame";
import GameScreen from "./Screens/GameScreen";
import React from "react";
import GameOver from "./Screens/GameOver";
export default function App() {
  const [finalisedNumber, setfinalisedNumber] = React.useState("");
  const [restartGame, setRestartGame] = React.useState(false);
  // You cant use the setter function itself inside the initial useState
  // const [screen, setScreen] = React.useState(
  //   <Startgame setScreen={setScreen}/>
  // );

  const [screen, setScreen] = React.useState(
    <Startgame  setfinalisedNumber={setfinalisedNumber}/>
  );
  React.useEffect(()=>{
    if(finalisedNumber)
      setScreen(<GameScreen inputNumber={finalisedNumber} setRestartGame={setRestartGame} setScreen={setScreen}/>)
    if(restartGame)
      setScreen(<Startgame  setfinalisedNumber={setfinalisedNumber}/>)

  },[finalisedNumber,restartGame])

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
