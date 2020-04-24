import * as React from "react";
import { View } from "react-native";
import * as Spacer from "./Spacer";
import * as StyledText from "./StyledText";
import { ProduceItem } from "../types";

export default function ServingInfoTable({ item }: { item: ProduceItem }) {
  return (
    <>
      <StyledText.Bold style={{ color: "rgba(0,0,0,0.3)", marginLeft: 5 }}>
        Serving info
      </StyledText.Bold>
      <Spacer.Vertical size={5} />
      <View
        style={{
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0, 0.2)",
          padding: 8,
        }}
      >
        <TableRow title="Serving size:" text={item.servingSize} />
        <TableRow title="Calories:" text={`${item.caloriesPerServing} kcal`} />
        <TableRow title="Vitamin A:" text={`${item.vitaminAPercentage}% DV`} />
        <TableRow title="Vitamin C:" text={`${item.vitaminCPercentage}% DV`} />

        <Spacer.Vertical size={15} />
        <StyledText.Italic>
          Percent daily values based on a diet of 1000 calories.
        </StyledText.Italic>
      </View>
    </>
  );
}

function TableRow({ title, text }: { title: string; text: string }) {
  return (
    <View
      style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}
    >
      <StyledText.Bold>{title}</StyledText.Bold>
      <StyledText.Regular>{text}</StyledText.Regular>
    </View>
  );
}
