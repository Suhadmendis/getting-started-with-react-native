import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";

import Cat from "./src/Cat";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeArea}>

        <Cat/>

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
  }

});
