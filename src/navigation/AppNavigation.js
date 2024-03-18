import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./tabNavigation";
import { screenNames } from "../utils";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenNames.tab} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigation };
