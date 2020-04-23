import React from "react";
import { useFonts } from "@use-expo/font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";

const CustomFonts = {
  "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
  "NotoSans-BoldItalic": require("./assets/fonts/NotoSans-BoldItalic.ttf"),
  "NotoSans-Italic": require("./assets/fonts/NotoSans-Italic.ttf"),
  "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
  ...Ionicons.font,
};

export default function App() {
  const [isLoaded] = useFonts(CustomFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
