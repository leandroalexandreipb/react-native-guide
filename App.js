import * as React from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const restaurants = [
  {
    id: 1,
    name: "The Rusty Spoon",
    cuisine: "American",
    rating: 4.5,
    address: "123 Main St, Cityville",
    phone: "+1 (123) 456-7890",
    website: "http://www.rustyspoon.com",
  },
  {
    id: 2,
    name: "Sushi Zen",
    cuisine: "Japanese",
    rating: 4.2,
    address: "456 Elm St, Sushiville",
    phone: "+1 (234) 567-8901",
    website: "http://www.sushizen.com",
  },
  {
    id: 3,
    name: "Chez Marie",
    cuisine: "French",
    rating: 4.8,
    address: "789 Oak St, Paris City",
    phone: "+1 (345) 678-9012",
    website: "http://www.chezmarie.com",
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.0,
    address: "101 Curry Ave, Spiceburg",
    phone: "+1 (456) 789-0123",
    website: "http://www.spicegarden.com",
  },
  {
    id: 5,
    name: "Mama's Trattoria",
    cuisine: "Italian",
    rating: 4.6,
    address: "555 Pasta Rd, Italiatown",
    phone: "+1 (567) 890-1234",
    website: "http://www.mamastrattoria.com",
  },
  {
    id: 6,
    name: "El Taqueria",
    cuisine: "Mexican",
    rating: 4.3,
    address: "222 Taco Blvd, Mexicoville",
    phone: "+1 (678) 901-2345",
    website: "http://www.eltaqueria.com",
  },
];

console.log(restaurants);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Restaurants"
        onPress={() => navigation.navigate("Restaurants")}
      />
    </View>
  );
}

function RestaurantsScreen({ navigation }) {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Detail Restaurant", { ...item })}
        >
          <View style={styles.item}>
            <Text style={styles.title}>{item.name + " - " + item.cuisine}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
function RestaurantDetailScreen({ route, navigation }) {
  const { address, phone, name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{phone}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen
          name="Detail Restaurant"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "#D7BDE2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default App;
