import * as React from "react";
import { View } from "react-native";

export const Vertical = ({ size }: { size: number }) => (
  <View style={{ marginVertical: size / 2 }} />
);

export const Horizontal = ({ size }: { size: number }) => (
  <View style={{ marginHorizontal: size / 2 }} />
);
