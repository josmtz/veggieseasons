import * as React from "react";
import { View } from "react-native";

export default function SpaceBetween({ style, children, size = 5 }: any) {
  return (
    <View style={style}>
      {children
        .filter((child: any) => child)
        .map((child: any, i: number) => (
          <View key={i} style={{ paddingLeft: i === 0 ? 0 : size }}>
            {child}
          </View>
        ))}
    </View>
  );
}
