import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AuthScreen } from "../../screens/auth";
import { screenNames } from "../../utils";
import { HomeStack } from "../stacks/HomeStack";
import { styles } from "./TabNavigation.styles";

const Tab = createBottomTabNavigator();

const { home, wishlist, account } = screenNames;

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarActiveTintColor: styles.tabBarActiveTintColor,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        // headerShown: false,
      })}
    >
      <Tab.Screen
        name={home.root}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={wishlist.root}
        component={AuthScreen}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={account.root}
        component={AuthScreen}
        options={{ title: "Mi Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const setIcon = (route, routeStatus) => {
  let iconName = "";

  routeStatus.focused ? (color = "#0098d3") : (color = "#fff");

  if (route.name === screenNames.home.root) {
    iconName = "home";
  } else if (route.name === screenNames.wishlist.root) {
    iconName = "heart";
  } else if (route.name === screenNames.account.root) {
    iconName = "user";
  }

  return <FontAwesome5 name={iconName} color={color} style={styles.icon} />;
};

export { TabNavigation };
