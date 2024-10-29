/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {View, Text} from 'react-native';
import ToDoList from './toDoList';
import ToDoForm from './toDoForm';

function App() {

  const [toDo, setToDo] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  return (
    <View>
      <Text>Lab 2 Work:</Text>
      <ToDoList tasks={toDo}/>
      <ToDoForm />
    </View>
  );
}

export default App;
