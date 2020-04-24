import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { useScrollToTop } from "@react-navigation/native";

import * as StyledText from "../components/StyledText";
import ProduceItems from "../data/ProduceItems";
import ProduceCard from "../components/ProduceCard";

type NavigationProp = StackNavigationProp<any>;
type Props = { navigation: NavigationProp };

export default function HomeScreen({ navigation }: Props) {
  const { top } = useSafeArea();
  const ref = React.useRef(null);
  useScrollToTop(ref);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <ScrollView
        style={{ flex: 1 }}
        ref={ref}
        contentContainerStyle={{ padding: 15 }}
      >
        <StyledText.Secondary>APRIL 2020</StyledText.Secondary>
        <StyledText.Title>In season today</StyledText.Title>

        <View style={{ marginBottom: 15 }} />

        {ProduceItems.map((item) => (
          <View style={{ marginBottom: 25 }} key={item.id}>
            <ProduceCard
              item={item}
              onPress={() => navigation.navigate("Details", { item })}
            />
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
