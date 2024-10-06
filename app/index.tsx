import React, { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native'

const SimpleTextDisplay: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  const [displayText, setDisplayText] = useState<string>('')

  const handlePress = () => {
    setDisplayText(inputText)
    setInputText('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Show Text" onPress={handlePress} />
      <View style={styles.textContainer}>
        <Text style={styles.displayedText}>{displayText}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  displayedText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
})

export default SimpleTextDisplay
