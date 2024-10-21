import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function Page() {
  const params = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name as string,
        }}
      />
      <Text>{params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskItem: {
    backgroundColor: '#E67E22',
    padding: 15,
    marginVertical: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
})
