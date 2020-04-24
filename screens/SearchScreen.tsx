import * as React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeArea } from "react-native-safe-area-context";

import ProduceItems from "../data/ProduceItems";
import * as StyledText from "../components/StyledText";
import * as Spacer from "../components/Spacer";
import * as SeasonIcons from "../components/SeasonIcons";
import SpaceBetween from "../components/SpaceBetween";

import { ProduceItem, Season } from "../types";

type NavigationProp = StackNavigationProp<any>;
type SearchScreenProps = { navigation: NavigationProp };

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const [searchResults, setSearchResults] = React.useState(ProduceItems);
  const { top } = useSafeArea();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: top }}>
      <SearchBar
        onChangeText={(text) => setSearchResults(findMatchingProduce(text))}
      />
      <Spacer.Vertical size={10} />
      <ScrollView style={{ flex: 1 }} keyboardDismissMode="on-drag">
        {searchResults.map((item) => (
          <View style={{ marginBottom: 20 }} key={item.id}>
            <SmallProduceItem
              item={item}
              onPress={() => navigation.navigate("Details", { item })}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

type TextChangeHandler = (text: string) => void;
type SearchBarProps = {
  onChangeText: TextChangeHandler;
};

function SearchBar({ onChangeText }: SearchBarProps) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name="ios-search"
        size={23}
        color="rgba(0,0,0,0.3)"
        style={{ marginTop: 5 }}
      />
      <Spacer.Horizontal size={10} />
      <TextInput
        autoCapitalize="none"
        clearButtonMode="always"
        autoCorrect={false}
        onChangeText={(value) => onChangeText(value)}
        style={{
          flex: 1,
          height: "100%",
          paddingTop: 4,
          fontFamily: "NotoSans-Regular",
          fontSize: 13,
        }}
      />
    </View>
  );
}

function SmallProduceItem({
  item,
  onPress,
}: {
  item: ProduceItem;
  onPress: () => void;
}) {
  return (
    <RectButton
      style={{ flexDirection: "row", paddingHorizontal: 10 }}
      onPress={onPress}
    >
      <Image
        source={item.imageAssetPath}
        style={{ width: 68, height: 68, borderRadius: 10 }}
      />
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <StyledText.Bold style={{ fontSize: 22 }}>
            {item.name}
          </StyledText.Bold>
          <SpaceBetween size={3} style={styles.seasonsIconsContainer}>
            {item.seasons.includes(Season.winter) && (
              <SeasonIcons.Winter mini />
            )}
            {item.seasons.includes(Season.spring) && (
              <SeasonIcons.Spring mini />
            )}
            {item.seasons.includes(Season.summer) && (
              <SeasonIcons.Summer mini />
            )}
            {item.seasons.includes(Season.autumn) && (
              <SeasonIcons.Autumn mini />
            )}
          </SpaceBetween>
        </View>

        <StyledText.Regular style={styles.description}>
          {item.shortDescription}
        </StyledText.Regular>
      </View>
    </RectButton>
  );
}

function findMatchingProduce(text: string) {
  if (!text) {
    return ProduceItems;
  }

  return ProduceItems.filter((item: ProduceItem) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 8,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    flex: 1,
  },
  seasonsIconsContainer: {
    marginLeft: 5,
    flexDirection: "row",
  },
});
