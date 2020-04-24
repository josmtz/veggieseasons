import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Ionicons } from "@expo/vector-icons";

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MyGardenScreen from "./screens/MyGardenScreen";
import SearchScreen from "./screens/SearchScreen";
import CalorieTargetScreen from "./screens/CalorieTargetScreen";
import PreferredCategoriesScreen from "./screens/PreferredCategoriesScreen";

const HomeStack = createNativeStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
        stackPresentation: "modal",
      }}
    >
      <HomeStack.Screen name="List" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const MyGardenStack = createStackNavigator();
function MyGarden() {
  return (
    <MyGardenStack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
      mode="modal"
    >
      <MyGardenStack.Screen
        name="GardenList"
        component={MyGardenScreen}
        options={{ title: "My Garden" }}
      />
      <MyGardenStack.Screen name="Details" component={DetailsScreen} />
    </MyGardenStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
function Search() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
        stackPresentation: "modal",
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function Settings() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerLargeTitle: true }}
      />
      <SettingsStack.Screen
        name="CalorieTarget"
        options={{ title: "Calorie Target" }}
        component={CalorieTargetScreen}
      />
      <SettingsStack.Screen
        name="PreferredCategories"
        options={{ title: "Preferred Categories" }}
        component={PreferredCategoriesScreen}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={getIconForRouteName(route.name)}
              color={color}
              size={size}
            />
          ),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My Garden" component={MyGarden} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconForRouteName = (name: string): string => {
  switch (name) {
    case "Home":
      return "ios-home";
    case "My Garden":
      return "ios-book";
    case "Search":
      return "ios-search";
    case "Settings":
      return "ios-settings";
    default:
      return "ios-alert"; // fallback if route name missing
  }
};
