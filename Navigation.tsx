import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MyGardenScreen from "./screens/MyGardenScreen";
import SearchScreen from "./screens/SearchScreen";

const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
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

const SearchStack = createStackNavigator();
function Search() {
  return (
    <SearchStack.Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
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
