import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenNames } from "../../utils";
import { HomeScreen } from "../../screens/home";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const { home } = screenNames;

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name={home.home} component={HomeScreen} />
      <Stack.Screen name={home.product} component={Random} />
      <Stack.Screen name={home.search} component={Random} />
    </Stack.Navigator>
  );
};

const Random = () => <Text>Hola</Text>;
