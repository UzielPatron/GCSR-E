import { AuthScreen } from "../screens/Auth";
import { AppNavigation } from "./AppNavigation";

const RootNavigation = () => {
  const user = "null";

  return user ? <AppNavigation /> : <AuthScreen />;
};

export { RootNavigation };
