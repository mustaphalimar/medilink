import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { RootStackScreenProps } from "../navigators/root-navigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { INTRO_SCREEN_01 } from "../utils/contants";
import Artwork01 from "../components/artworks/Artwork01";
import { useTheme } from "@react-navigation/native";
import ScreenIndicators from "../components/screen-indicators";
import PrimaryButton from "../components/ui/primary-button";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen01">) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.card }]}
    >
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        exiting={FadeInUp.duration(1000).springify()}
        style={{
          alignItems: "center",
          flex: 1,
          marginTop: 100,
          justifyContent: "center",
        }}
      >
        <Artwork01 width={300} height={300} />
      </Animated.View>
      <View style={{ flex: 1 }} />

      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={styles.title}
        >
          {INTRO_SCREEN_01.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).springify()}
          style={styles.description}
        >
          {INTRO_SCREEN_01.description}
        </Animated.Text>

        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <ScreenIndicators count={3} activeIndex={0} />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.touchableWrapper}
        >
          <PrimaryButton
            onPress={() => navigation.replace("IntroScreen02")}
            label="Next"
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
  },
  description: {
    color: "#333",
    marginTop: 16,
    fontSize: 16,
  },
  touchableWrapper: {
    alignItems: "center",
  },
});

export default IntroScreen01;
