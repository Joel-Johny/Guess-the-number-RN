import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import GuessContainer from "../Components/GuessContainer";
import PrimaryButton from "../Components/PrimaryButton";
import GameOver from "./GameOver";
let min = 0;
let max = 100;

const GameScreen = ({ inputNumber,setScreen }) => {
  // Should be a callback function inside useState if you are calling a function 
  const [computerGuess, setComputerGuess] = React.useState(()=>generateNumber(0,100));
  const [guesses, setGuesses] = React.useState([computerGuess]);
  

  function userTruth(userTold) {
    if ((computerGuess > inputNumber && userTold == "Higher +") || (computerGuess < inputNumber && userTold == "Lower -")){
      console.log("Lie")
      Alert.alert("Liar!!", "Don't lie dude", [
        {
          text: "Sorry lol!",
          style: "destructive",
        },
      ]);
      return;
    } 
    // Actual Number is higher
    else if (computerGuess < inputNumber) 
      min = computerGuess;
    
    // Actual Number is lower
    else
      max = computerGuess;
    console.log("Truth")
    
    const currentComputerGuess=generateNumber(min,max)
    setGuesses((pastGuesses)=>[...pastGuesses,currentComputerGuess])
    setComputerGuess(currentComputerGuess)
    // WHat if i send computer guess instead of current computer guess?then you wont have latest state update in GameOver
    if (computerGuess === inputNumber || guesses.length===3) return( setScreen(<GameOver userGuess={inputNumber} computerGuess={currentComputerGuess} tries={guesses.length+1}/>));

  }

  function generateNumber(min, max) {
    console.log("Generating number",min,max);
    const newNumber=Math.floor(Math.random()*(max-min))+min
    console.log("New",newNumber);

    return newNumber
    
  }

  return (
    <View style={styles.gameContainer}>
      <GuessContainer value={inputNumber}>Selected Number : </GuessContainer>
      {/* <Button onPress={()=>setScreen}/> */}

      <View style={styles.computer}>
        <Text style={styles.header}>
          The Computer has {4-guesses.length} tries remaining
        </Text>
        <Text style={styles.header}>
          Is the Guessed number Higher or Lower?
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton functionCall={userTruth}>Higher +</PrimaryButton>
          <PrimaryButton functionCall={userTruth}>Lower -</PrimaryButton>
        </View>
      </View>
      {
        guesses.map((guess,index)=><GuessContainer value={guess} key={index}>Computer Guessed : </GuessContainer>)
      }
      
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
