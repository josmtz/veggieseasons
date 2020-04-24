import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationRow } from "../components/TableRow";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<any>;
type Props = { navigation: NavigationProp };

export default function SettingsScreen({ navigation }: Props) {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30 }}>
      <NavigationRow
        icon={
          <Ionicons
            name="ios-walk"
            color="#fff"
            size={20}
            style={{ textAlign: "center" }}
          />
        }
        iconBackgroundColor="blue"
        onPress={() => navigation.navigate("CalorieTarget")}
        title="Calorie Target"
        value={1000}
        isLastRow={false}
      />
      <NavigationRow
        icon={
          <FontAwesome5
            name="heart"
            color="#fff"
            size={15}
            solid
            style={{ textAlign: "center" }}
          />
        }
        iconBackgroundColor="#d79b26"
        onPress={() => navigation.navigate("PreferredCategories")}
        title="Preferred Categories"
        subtitle="What types of veggies you prefer!"
        isLastRow={true}
      />
    </ScrollView>
  );
}
