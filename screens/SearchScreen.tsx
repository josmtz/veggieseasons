import * as React from "react";
import { View } from "react-native";
import * as StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <StyledText.Regular style={{ textAlign: "center" }}>
        TODO
      </StyledText.Regular>
    </View>
  );
}
