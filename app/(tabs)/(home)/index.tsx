import { Link, Stack, useRouter } from "expo-router";
import { Image, Text, View, StyleSheet, Button } from "react-native";

export default function Home() {
  const router = useRouter();

  const goToDetails = () => {
    router.push({
      pathname: "/details",
      params: { name: "Bacon", age: 30 },
    });
  };
  const goToId = () => {
    router.push({
      pathname: "/(home)/details/[id]",
      params: { id: "8769" },
    });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: "My home",
          headerTitle: "Index",
        }}
      />
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={goToDetails} />
      {/* <Button title="Go to ID" onPress={goToId} /> */}
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
