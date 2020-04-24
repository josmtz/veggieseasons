import * as React from "react";
import { View } from "react-native";
import * as StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";

export default function MyGardenScreen() {
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
        You haven't added any favourite veggies to your garden yet.
      </StyledText.Regular>
      <Spacer size={10} />
      <StyledText.Secondary>
        <StyledText.Italic>
          (actually, this isn't implemented 😇)
        </StyledText.Italic>
      </StyledText.Secondary>
    </View>
  );
}
