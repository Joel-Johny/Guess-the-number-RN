import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Startgame from "./Startgame";

const GameOver = ({
  userGuess,
  computerGuess,
  tries,
  setRestartGame,
  setfinalisedNumber,
}) => {
  console.log(userGuess, computerGuess, tries);
  return (
    <View style={styles.endGame}>
      <View style={styles.gameOverContainer}>
        <Text style={styles.gameOverContainerText}>Game Over</Text>
      </View>
      <Image style={styles.image} source={require("../assets/deadend.jpg")} />
      <View tyle={styles.resultContainer}>
        <Text style={styles.resultText}>Your Guess was {userGuess}</Text>
        <Text style={styles.resultText}>
          Computer's last Guess was {computerGuess}
        </Text>
        <Text style={styles.resultText}>
          Total attempts by Computer {tries}/4
        </Text>
      </View>
      <View>
        <Button
          title="Restart Game"
          onPress={() => {
            setfinalisedNumber("");
            setRestartGame(true);
          }}
        />
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  endGame: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    padding: 30,
    gap: 30,
    alignItems: "center",
  },
  gameOverContainer: {
    borderWidth: 2,
    borderColor: "lightgreen",
    padding: 15,
    paddingHorizontal: 50,
  },
  gameOverContainerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderColor: "lightgreen",
    borderWidth: 2,
  },
  resultText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
