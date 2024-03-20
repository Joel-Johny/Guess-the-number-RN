import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children,functionCall }) => {
  function handlePress() {
    console.log("calling this fn",functionCall)
    functionCall()
  }
  return (
    <View style={styles.buttonContainerOuter}>
      <Pressable
        style={(props)=>{
            return(
            (props.pressed)
            ?[styles.buttonContainerInner,styles.pressed]
            :styles.buttonContainerInner
            )
        }
            
        }
        onPress={handlePress}
        android_ripple={{ color: "green" }}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainerOuter: {
    flex: 1,
    backgroundColor: "lightgreen",
    elevation: 10,
    borderRadius:15,
    overflow:"hidden"
  },
  buttonContainerInner: {
    padding: 10,
  },
  textStyle: {
    color: "white",
    borderRadius: 15,
    textAlign: "center",
  },
  pressed:{
    backgroundColor:"red"
  }
});
