import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Exercise from "./src/Exercise";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.safeArea}>
        <Exercise />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
