const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LeitorDeQRCode from "./screens/LeitorDeQRCode";
import CheckIn from "./screens/CheckIn";
import PrFila1 from "./screens/PrFila1";
import Formulrio from "./screens/Formulrio";
import PainelDoPaciente from "./screens/PainelDoPaciente";
import LogIn1 from "./screens/LogIn1";
import PrRegistro from "./screens/PrRegistro";
import SignUp1 from "./screens/SignUp1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_black: require("./assets/fonts/Roboto_black.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogIn"
              component={LogIn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LeitorDeQRCode"
              component={LeitorDeQRCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckIn"
              component={CheckIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrRegistro"
              component={PrRegistro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrFila"
              component={PrFila1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Formulrio"
              component={Formulrio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PainelDoPaciente"
              component={PainelDoPaciente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
