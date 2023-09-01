import { Dimensions, Platform, StatusBar } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const DEVICE_HEIGHT = Platform.select({
  ios: deviceHeight,
  android:
    StatusBar.currentHeight > 24
      ? deviceHeight
      : deviceHeight - StatusBar.currentHeight,
});

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const height = DEVICE_HEIGHT;

export const slickHeight = (percentage: number) => {
  return Math.floor((percentage / 100) * height);
};

export const slickWidth = (percentage: number) => {
  return Math.floor((percentage / 100) * screenWidth);
};

export const slickFontSize = (percentage: number) => {
  return Math.floor(
    (percentage / 100) * (screenWidth < height ? screenWidth : height)
  );
};
