import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native'

export default function Details() {
  const router = useRouter()
  const params = useLocalSearchParams()

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  const goToNewPage = (item: string) => {
    router.push({
      pathname: '/page',
      params: { name: item },
    })
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name as string,
        }}
      />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Pressable
            style={styles.taskItem}
            onPress={() => goToNewPage(itemData.item.title)}
          >
            <Text style={styles.taskText}>{itemData.item.title}</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Lista vazia</Text>
        }
      />
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
