import * as React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const ICON_SIZE = 22;

export const Summer = () => (
  <FontAwesome5 name="umbrella-beach" size={ICON_SIZE} color="#287213" />
);
export const Winter = () => (
  <FontAwesome5 name="snowflake" size={ICON_SIZE} color="#336dcc" />
);
export const Autumn = () => (
  <FontAwesome5 name="leaf" size={ICON_SIZE} color="#724913" />
);
export const Spring = () => (
  <Ionicons name="md-flower" size={ICON_SIZE} color="#2fa02b" />
);
