import React from "react";
// import { useColorScheme } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { LightTheme, DarkTheme, palette } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/Home";
import SearchScreen from "@screens/Search";
import DetailScreen from "@screens/Detail";
import ProfileScreen from "@screens/Profile";
import { RootStackParamList, RootTabParamList } from "types/navigation";
import HeaderBlock from "@shared-components/HeaderBlock";
import StyledText from "@shared-components/StyledText";
import RNBounceable from "@freakycoder/react-native-bounceable";
import iconSize from "@theme/icon-size";
import NotificationScreen from "@screens/Notification";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  // const scheme = useColorScheme();
  // const isDarkMode = scheme === "dark";
  const isDarkMode = false;

  const renderTabHeader = (
    route: keyof RootTabParamList,
    navigation: unknown,
  ) => {
    let title = "냉장고 현황";
    switch (route) {
      case "Home":
        title = "냉장고 현황";
        break;
      case "Plus":
        title = "식품 추가";
        break;
      case "Profile":
        title = "내 정보";
        break;
      default:
        title = "냉장고 현황";
        break;
    }
    return (
      <HeaderBlock
        middleComponent={<StyledText textType="title" text={title} />}
        rightComponent={
          false ? (
            <RNBounceable
              onPress={() => {
                (
                  navigation as StackNavigationProp<RootStackParamList>
                ).navigate("Notification");
              }}
            >
              <Icon
                name="notifications-outline"
                type="Ionicons"
                size={iconSize.default}
              />
            </RNBounceable>
          ) : (
            <></>
          )
        }
      />
    );
  };

  const renderTabIcon = (
    route: keyof RootTabParamList,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route) {
      case "Home":
        iconName = focused ? "home" : "home-outline";
        break;
      case "Plus":
        iconName = focused ? "add-circle" : "add-circle-outline";
        break;
      case "Profile":
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          header: () => renderTabHeader(route.name, navigation),
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route.name, focused, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Plus" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Root"
          component={renderTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
