import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const CustomFonts = {
  "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
  "NotoSans-BoldItalic": require("./assets/fonts/NotoSans-BoldItalic.ttf"),
  "NotoSans-Italic": require("./assets/fonts/NotoSans-Italic.ttf"),
  "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(CustomFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "NotoSans-Bold" }}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
