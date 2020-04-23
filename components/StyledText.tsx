import * as React from "react";
import { Text, TextProperties } from "react-native";
import { ProduceItem } from '../types';

interface Props extends TextProperties {
  children?: any;
}

export const Regular = (props: Props) => (
  <Text {...props} style={[{ fontFamily: "NotoSans-Regular" }, props.style]} />
);

export const Bold = (props: Props) => (
  <Text {...props} style={[{ fontFamily: "NotoSans-Bold" }, props.style]} />
);

export const Italic = (props: Props) => (
  <Text {...props} style={[{ fontFamily: "NotoSans-Italic" }, props.style]} />
);

export const BoldItalic = (props: Props) => (
  <Text
    {...props}
    style={[{ fontFamily: "NotoSans-BoldItalic" }, props.style]}
  />
);

export const Title = (props: Props) => (
  <Bold {...props} style={[{ fontSize: 28 }, props.style]} />
);

export const Secondary = (props: Props) => (
  <Regular {...props} style={[{ color: "#888" }, props.style]} />
);
