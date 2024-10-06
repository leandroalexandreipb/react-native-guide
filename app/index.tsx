import React, { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native'

const SimpleTextDisplay: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  const [displayText, setDisplayText] = useState<string>('')
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false)

  const handleShowTextPress = () => {
    Alert.alert(
      'Confirm',
      'Do you want to display the text?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => setDisplayText(inputText),
        },
      ],
      { cancelable: true }
    )
  }

  const toggleInput = () => {
    setIsInputDisabled((prevState) => !prevState)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={setInputText}
        editable={!isInputDisabled}
        placeholderTextColor={isInputDisabled ? '#aaa' : '#888'}
      />

      <View style={styles.toggleButtonContainer}>
        <Button
          title={isInputDisabled ? 'Enable Input' : 'Disable Input'}
          onPress={toggleInput}
        />
      </View>
      <Button title="Show Text" onPress={handleShowTextPress} />

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
  toggleButtonContainer: {
    marginTop: 10,
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
