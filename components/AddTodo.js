import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

function AddTodo({submitHandler}) {
  const [text, setText] = useState("")

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder='New Todo...'
        onChangeText={changeHandler}
      /> 
      <View style={styles.button}> 
        <Button onPress={() => submitHandler(text)} title = 'add todo'  color={"white"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    justifyContent: "center"
  }
})

export default AddTodo
