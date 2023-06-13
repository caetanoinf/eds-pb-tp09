import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native";
import { ClassesScreen } from "./screens/Classes";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ClassesScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
