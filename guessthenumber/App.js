import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Startgame from "./Screens/Startgame";
export default function App() {
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
        <Startgame />
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
