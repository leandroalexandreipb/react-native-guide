import { Link, Stack, useRouter } from "expo-router";
import { Image, Text, View, StyleSheet, Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Settings",
          headerTitle: "Settings",
        }}
      />
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
