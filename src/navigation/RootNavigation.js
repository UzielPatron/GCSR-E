import { AuthScreen } from "../screens/auth";
import { AppNavigation } from "./AppNavigation";

const RootNavigation = () => {
  const user = "null";

  return user ? <AppNavigation /> : <AuthScreen />;
};

export { RootNavigation };
