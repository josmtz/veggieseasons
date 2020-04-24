import * as React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

const ICON_SIZE = 22;

const MiniIcon = ({ color = "#000" }) => {
  return (
    <View
      style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }}
    />
  );
};

export const Summer = ({ mini = false, color = "#287213" }) =>
  mini ? (
    <MiniIcon color={color} />
  ) : (
    <FontAwesome5 name="umbrella-beach" size={ICON_SIZE} color={color} />
  );

export const Winter = ({ mini = false, color = "#336dcc" }) =>
  mini ? (
    <MiniIcon color={color} />
  ) : (
    <FontAwesome5 name="snowflake" size={ICON_SIZE} color={color} />
  );

export const Autumn = ({ mini = false, color = "#724913" }) =>
  mini ? (
    <MiniIcon color={color} />
  ) : (
    <FontAwesome5 name="leaf" size={ICON_SIZE} color={color} />
  );

export const Spring = ({ mini = false, color = "#2fa02b" }) =>
  mini ? (
    <MiniIcon color={color} />
  ) : (
    <Ionicons name="md-flower" size={ICON_SIZE} color={color} />
  );
