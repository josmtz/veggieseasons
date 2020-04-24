import * as React from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import * as StyledText from "./StyledText";
import { ProduceItem } from "../types";
import { BlurView } from "expo-blur";
import { BaseButton } from "react-native-gesture-handler";

type Props = {
  item: ProduceItem;
  onPress: () => void;
};

const PRESSED_OPACITY = 0.05;
const DEFAULT_OPACITY = 0.25;

export default function ProduceCard({ item, onPress }: Props) {
  const opacity = React.useRef(new Animated.Value(DEFAULT_OPACITY)).current;
  const handleActiveStateChange = React.useCallback(
    (active) => {
      let targetOpacity = active ? PRESSED_OPACITY : DEFAULT_OPACITY;
      Animated.spring(opacity, { toValue: targetOpacity }).start();
    },
    [opacity]
  );

  return (
    <Animated.View style={[styles.shadow, { shadowOpacity: opacity }]}>
      <BaseButton
        onActiveStateChange={handleActiveStateChange}
        onPress={onPress}
      >
        <View style={styles.container}>
          <View style={{ overflow: "hidden", flex: 1 }}>
            <Image
              source={item.imageAssetPath}
              style={{ width: undefined, height: undefined, flex: 1 }}
            />

            <Footer item={item} />
          </View>
        </View>
      </BaseButton>
    </Animated.View>
  );
}

const Footer = ({ item }: { item: ProduceItem }) => (
  <BlurView style={styles.footer} intensity={90} tint="light">
    <StyledText.Title>{item.name}</StyledText.Title>
    <StyledText.Regular style={{ fontSize: 14 }}>
      {item.shortDescription}
    </StyledText.Regular>
  </BlurView>
);

const styles = StyleSheet.create({
  container: {
    height: 250,
    overflow: "hidden",
    borderRadius: 5,
  },
  shadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "black",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
});
