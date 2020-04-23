import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as StyledText from "../components/StyledText";
import { useSafeArea } from "react-native-safe-area-context";
import ProduceItems from "../data/ProduceItems";
import ProduceCard from "../components/ProduceCard";

export default function HomeScreen() {
  const { top } = useSafeArea();

  return (
    <ScrollView
      style={[styles.container, { marginTop: top }]}
      contentContainerStyle={{ padding: 15 }}
    >
      <StyledText.Secondary>APRIL 2020</StyledText.Secondary>
      <StyledText.Title>In season today</StyledText.Title>

      <View style={{marginBottom: 20}} />

      {ProduceItems.map((item) => (
        <ProduceCard item={item} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
