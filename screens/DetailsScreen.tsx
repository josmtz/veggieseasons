import * as React from "react";
import { Image, StyleSheet, SegmentedControlIOS, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, BorderlessButton } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";

import * as StyledText from "../components/StyledText";
import * as SeasonIcons from "../components/SeasonIcons";
import * as Spacer from "../components/Spacer";
import SpaceBetween from '../components/SpaceBetween';

import { Season, ProduceItem } from "../types";

type Params = { item: ProduceItem };
type DetailsNavigationProp = StackNavigationProp<Params>;
type DetailsRouteProp = RouteProp<{ Details: Params }, "Details">;
type Props = { navigation: DetailsNavigationProp; route: DetailsRouteProp };

export default function DetailsScreen({ navigation, route }: Props) {
  const { item } = route.params;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header navigation={navigation} item={item} />
      <View style={styles.content}>
        <SegmentedControlIOS
          values={["Facts & Info", "Trivia"]}
          selectedIndex={selectedIndex}
          onChange={({ nativeEvent }) =>
            setSelectedIndex(nativeEvent.selectedSegmentIndex)
          }
        />
        <Spacer.Vertical size={10} />
        <View style={{ padding: 10 }}>
          {selectedIndex === 0 ? <Facts item={item} /> : <Trivia item={item} />}
        </View>
      </View>
    </ScrollView>
  );
}

function Facts({ item }: { item: ProduceItem }) {
  return (
    <>
      <View style={styles.infoRow}>
        <StyledText.Regular style={{ fontSize: 15 }}>
          {item.category.toUpperCase()}
        </StyledText.Regular>
        <SpaceBetween size={7} style={styles.seasonsIconsContainer}>
          {item.seasons.includes(Season.winter) && <SeasonIcons.Winter />}
          {item.seasons.includes(Season.spring) && <SeasonIcons.Spring />}
          {item.seasons.includes(Season.summer) && <SeasonIcons.Summer />}
          {item.seasons.includes(Season.autumn) && <SeasonIcons.Autumn />}
        </SpaceBetween>
      </View>
      <Spacer.Vertical size={5} />
      <StyledText.Title>{item.name}</StyledText.Title>
      <Spacer.Vertical size={5} />
      <StyledText.Regular>{item.shortDescription}</StyledText.Regular>
      <Spacer.Vertical size={5} />
    </>
  );
}

function Trivia({ item }: { item: ProduceItem }) {
  return <StyledText.Title>Trivia</StyledText.Title>;
}

function Header({
  navigation,
  item,
}: {
  navigation: DetailsNavigationProp;
  item: ProduceItem;
}) {
  const { top } = useSafeArea();

  return (
    <>
      <View style={styles.header}>
        <Image
          source={item.imageAssetPath}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: "cover",
          }}
        />
      </View>
      <BorderlessButton
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        style={[styles.closeButton, { top }]}
      >
        <Ionicons
          name="ios-close"
          size={30}
          style={{ textAlign: "center" }}
          color="rgba(0,0,0,0.8)"
        />
      </BorderlessButton>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 170,
  },
  content: {
    padding: 15,
  },
  closeButton: {
    position: "absolute",
    left: 15,
    backgroundColor: "#f3f3f2",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  seasonsIconsContainer: {
    flexDirection: "row",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
