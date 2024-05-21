import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import IntroScreen01 from "../screens/intro-screen-01";
import IntroScreen02 from "../screens/intro-screen-02";
import LoginScreen from "../screens/login-screen";
import IntroScreen03 from "../screens/intro-screen-03";
import SignUpScreen from "../screens/signup-screen";

export type RootStackParamList = {
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  IntroScreen03: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="IntroScreen03" component={IntroScreen03} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignupScreen" component={SignUpScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
export default RootNavigator;
