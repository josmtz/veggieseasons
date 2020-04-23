import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as StyledText from "./StyledText";
import { ProduceItem } from "../types";
import { BlurView } from "expo-blur";

type Props = {
  item: ProduceItem;
};

export default function ProduceCard({ item }: Props) {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <View style={{ overflow: "hidden", flex: 1 }}>
          <Image
            source={item.imageAssetPath}
            style={{ width: undefined, height: undefined, flex: 1 }}
          />

          <BlurView style={styles.footer} intensity={90} tint="light">
            <StyledText.Title>{item.name}</StyledText.Title>
            <StyledText.Regular style={{ fontSize: 14 }}>
              {item.shortDescription}
            </StyledText.Regular>
          </BlurView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    overflow: "hidden",
    borderRadius: 5,
  },
  shadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
});
