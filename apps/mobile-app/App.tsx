import { StyleSheet, View } from "react-native";

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import RootNavigator from "./navigators/root-navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { registerRootComponent } from "expo";

function App() {
  const [fontsLoaded, fontError] = useFonts({
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
  });

  const theme: Theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: "#0EBE7F" },
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
