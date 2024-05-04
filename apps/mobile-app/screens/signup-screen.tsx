import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { RootStackScreenProps } from "../navigators/root-navigator";
import React from "react";
import PrimaryButton from "../components/ui/primary-button";
import { theme } from "../tailwind.config";
import Icons from "@expo/vector-icons/MaterialIcons";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import googleSVG from "../assets/images/google.png";
import facebookSVG from "../assets/images/facebook.png";
import { Pressable } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const SignUpScreen = ({ navigation }: RootStackScreenProps<"SignupScreen">) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.card }]}
      >
        <View style={styles.backArrow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 80,
            display: "flex",
            gap: 10,
          }}
        >
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{ fontSize: 26, fontWeight: "800", textAlign: "center" }}
          >
            Join us to start your journey
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).springify()}
            style={{
              textAlign: "center",
              color: "#333",

              paddingHorizontal: 8,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            enim?
          </Animated.Text>
        </View>

        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 10,
            gap: 8,
            marginTop: 50,
          }}
        >
          <TouchableOpacity
            style={[
              styles.socialIcon,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <Image source={googleSVG} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.socialIcon,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <Image source={facebookSVG} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="John Doe"
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: theme.colors.text,
                paddingLeft: 48,
                paddingRight: 12,
                height: 48,
                borderRadius: 12,

                backgroundColor: theme.colors.background,
                width: "100%",
              }}
            />
            <Icons
              name="person"
              color={theme.colors.text}
              size={24}
              style={styles.icon}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email@example.com"
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: theme.colors.text,
                paddingLeft: 48,
                paddingRight: 12,
                height: 48,
                borderRadius: 12,

                backgroundColor: theme.colors.background,
                width: "100%",
              }}
            />
            <Icons
              name="email"
              color={theme.colors.text}
              size={24}
              style={styles.icon}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: theme.colors.text,
                paddingLeft: 48,
                paddingRight: 12,
                height: 48,
                borderRadius: 12,
                backgroundColor: theme.colors.background,
                width: "100%",
              }}
            />
            <Icons
              name="lock"
              size={24}
              color={theme.colors.text}
              style={styles.icon}
            />
          </View>
          <PrimaryButton
            label="Sign Up"
            style={{ width: "90%", marginTop: 10 }}
          />
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: theme.colors.primary }}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backArrow: {
    paddingHorizontal: 24,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
  },

  icon: {
    position: "absolute",
    left: 12,
    top: 12,
    opacity: 0.5,
    // transform: [{ translateY: "-50%" }],
  },

  socialIcon: {
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpScreen;
