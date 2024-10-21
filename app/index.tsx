import { Link, Stack, useNavigation, useRouter } from 'expo-router'
import { Image, Text, View, StyleSheet, Button } from 'react-native'

export default function Home() {
  const router = useRouter()

  const goToDetails = () => {
    router.push({
      pathname: '/details',
      params: { name: 'Bacon', age: 30 },
    })
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Teste',
          headerTitleAlign: 'center',
        }}
      />
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 50,
  },
})
