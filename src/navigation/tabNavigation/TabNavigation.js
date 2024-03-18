import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth";
import { screenNames } from "../../utils";

const Tab = createBottomTabNavigator();

const { home, wishlist, account } = screenNames;

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={home.root}
        component={AuthScreen}
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

export { TabNavigation };
