import { Home } from "../pages/Home";
import { Welcome } from "../pages/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "../pages/About";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>

  );
}