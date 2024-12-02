import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

function ToDoForm({addTaskFunc}) {
  
  const [taskText, setTaskText] = React.useState('');

  const handleSubmit = (text) => {
    if (text == '' || text == null) {
      alert("Enter a task to add");
    } else {
      addTaskFunc(text)
      setTaskText('');
    }
  }
  return(
    <View style={styles.form}>
      <TextInput
      style={styles.input}
      placeholder="Add a new task..."
      onChangeText={(text) => setTaskText(text)}
      value={taskText}
      />
      <Button title="Add" onPress={() => handleSubmit(taskText)} />
    </View>
  );
};
    
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;