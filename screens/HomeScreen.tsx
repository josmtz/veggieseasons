import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as StyledText from "../components/StyledText";
import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import ProduceItems from "../data/ProduceItems";
import ProduceCard from "../components/ProduceCard";

export default function HomeScreen() {
  const { top } = useSafeArea();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: top }}>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={{ padding: 15 }}
      >
        <StyledText.Secondary>APRIL 2020</StyledText.Secondary>
        <StyledText.Title>In season today</StyledText.Title>

        <View style={{ marginBottom: 20 }} />

        {ProduceItems.map((item) => (
          <View style={{ marginBottom: 25 }} key={item.id}>
            <ProduceCard item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
