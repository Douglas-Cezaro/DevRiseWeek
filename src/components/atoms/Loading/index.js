import React from "react";
import { View, Text } from "react-native";
import Loading from "../../../../assets/animations/loading.json";
import LottieView from "lottie-react-native";

export default () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1E1D42",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        style={{
          width: 200,
          height: 200,
        }}
        resizeMode="contain"
        autoPlay
        loop
        source={Loading}
      />
    </View>
  );
};
