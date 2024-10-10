import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native'

interface Task {
  key: string
  task: string
}
const ToDoApp: React.FC = () => {
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<Task[]>([])
  const addTask = () => {
    if (task.trim()) {
      const newTask: Task = {
        key: Math.random().toString(),
        task: task,
      }

      setTaskList((prevTaskList) => [...prevTaskList, newTask])
      setTask('')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
          placeholderTextColor="#888"
        />
        <Button title="Add" onPress={addTask} color="#4CAF50" />
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.key}
        renderItem={(itemData) => (
          <TouchableOpacity style={styles.taskItem}>
            <Text style={styles.taskText}>{itemData.item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 8,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#fff',
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

export default ToDoApp
