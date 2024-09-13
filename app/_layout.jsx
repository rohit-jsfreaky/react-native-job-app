import { Stack } from "expo-router";
import { useCallback } from "react";
import {useFonts} from "expo-font"

export default function RootLayout() {

  const fontsLaoded = useFonts({
    DMBold : require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium : require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular : require('../assets/fonts/DMSans-Regular.ttf'),
  });


  return (
    <Stack />
  );
}
