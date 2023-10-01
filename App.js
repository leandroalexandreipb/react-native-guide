import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", text, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Insira texto por favor"
        editable={inputDisabled}
      />
      <Button
        onPress={() => setInputDisabled(!inputDisabled)}
        title="Enable/Disable"
        color="#841584"
      />
      <Button
        onPress={createTwoButtonAlert}
        title="Open alert"
        color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
