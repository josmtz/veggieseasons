import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import * as Spacer from "./Spacer";

type NavigationRowProps = {
  title: string;
  icon: any;
  iconBackgroundColor: string;
  subtitle?: string;
  value?: string | number;
  onPress: () => void;
  isLastRow: boolean;
};

export function NavigationRow(props: NavigationRowProps) {
  return (
    <RectButton
      onPress={props.onPress}
      style={[styles.container, !props.isLastRow && { borderBottomWidth: 0 }]}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: props.iconBackgroundColor },
        ]}
      >
        {props.icon}
      </View>

      <Spacer.Horizontal size={12} />

      <View style={styles.text}>
        <Text style={{ fontSize: 15 }}>{props.title}</Text>
        {props.subtitle ? (
          <Text style={{ fontSize: 11, marginTop: 2 }}>{props.subtitle}</Text>
        ) : null}
      </View>

      <View style={styles.right}>
        {props.value ? (
          <>
            <Text>{props.value}</Text>
            <Spacer.Horizontal size={15} />
          </>
        ) : null}
        <Ionicons
          name="ios-arrow-forward"
          color="#c0c0c0"
          size={20}
          style={{ textAlign: "center", marginBottom: -2 }}
        />
      </View>

      {/*  */}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "column",
  },
  right: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0,0,0,0.1)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 4,
    width: 25,
    height: 25,
    paddingTop: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
