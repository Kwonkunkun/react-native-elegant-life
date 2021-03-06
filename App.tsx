import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox, Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"dark-content"} />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
