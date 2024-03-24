import React, { useEffect } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import GuessContainer from "../Components/GuessContainer";
import PrimaryButton from "../Components/PrimaryButton";
import GameOver from "./GameOver";
let min=0;
let max=10;
const GameScreen = ({
  inputNumber,
  setRestartGame,
  setScreen,
  setfinalisedNumber,
}) => {
  // Should be a callback function inside useState if you are calling a function
  // const [computerGuess, setComputerGuess] = React.useState(() =>
  //   generateNumber(min,max)
  // );.

  //always remember 2 things 1)inside useState u cannot set the setter function of its own 2)if a function having parameter is inside the setter fn make sure its inside a callback else it will call everytime
  const [computerGuess, setComputerGuess] = React.useState(()=>generateNumber(0, 10));
  const [guesses, setGuesses] = React.useState([computerGuess]);
  useEffect(() => {
    console.log("Matching initial guess", computerGuess,inputNumber);
 
    if (computerGuess == inputNumber) {
    console.log("Matched");

      setScreen(
        <GameOver
          userGuess={inputNumber}
          computerGuess={computerGuess}
          tries={guesses.length + 1}
          setRestartGame={setRestartGame}
          setfinalisedNumber={setfinalisedNumber}
        />
      );
    }
    return (()=>{
      console.log("min and max should be reset because they are global variable so when the comp unmounts function,states unmount but not the variabkes declared at file level",min,max)
      min=0;
      max=10;
    })
  }, []);

  function userTruth(userTold) {
    if (
      (computerGuess > inputNumber && userTold == "Higher +") ||
      (computerGuess < inputNumber && userTold == "Lower -")
    ) {
      console.log("Lie");
      Alert.alert("Liar!!", "Don't lie dude", [
        {
          text: "Sorry lol!",
          style: "destructive",
        },
      ]);
      return;
    }
    // Actual Number is higher
    else if (computerGuess < inputNumber) {
      min = computerGuess+1;
    console.log("Truth actual no. is higher","between min :",min,"max : ",max);

    }

    // Actual Number is lower
    else{
      max = computerGuess-1;
      console.log("Truth actual no is lower",min,max);
    } 

    const currentComputerGuess = generateNumber(min, max);
    console.log("New", currentComputerGuess,"between min :",min,"max : ",max);

    setGuesses((pastGuesses) => [...pastGuesses, currentComputerGuess]);
    setComputerGuess(currentComputerGuess);
    // WHat if i send computer guess instead of current computer guess?then you wont have latest state update in GameOver
    if (currentComputerGuess == inputNumber || guesses.length === 3)
      //3 and not 4 because by the time fueses updates to 4 it will be 3 async update
      return setScreen(
        <GameOver
          userGuess={inputNumber}
          computerGuess={currentComputerGuess}
          tries={guesses.length + 1}
          setRestartGame={setRestartGame}
          setfinalisedNumber={setfinalisedNumber}
        />
      );
  }

  function generateNumber(min, max) {
    console.log("Generating number", min, max);
    const newNumber = Math.floor(Math.random() * (max - min)) + min;

    return newNumber;
  }

  return (
    <View style={styles.gameContainer}>
      <GuessContainer value={inputNumber}>Selected Number : </GuessContainer>

      <View style={styles.computer}>
        <Text style={styles.header}>
          The Computer has {4 - guesses.length} tries remaining
        </Text>
        <Text style={styles.header}>
          Is the Guessed number Higher or Lower?
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton functionCall={userTruth}>Higher +</PrimaryButton>
          <PrimaryButton functionCall={userTruth}>Lower -</PrimaryButton>
        </View>
      </View>
      {guesses.map((guess, index) => (
        <GuessContainer value={guess} key={index}>
          Computer Guessed :{" "}
        </GuessContainer>
      ))}
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

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    paddingTop: 35,
    gap: 30,
  },
  computer: {
    gap: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginHorizontal: 30,
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
