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

  const addTask = (task) => {
    if (toDo.includes(task)) {
      alert('Can\'t have duplicate tasks')
    } else {
      setToDo([...toDo, task]);
    }
  }
  
  return (
    <View>
      <ToDoList tasks={toDo}/>
      <ToDoForm addTaskFunc={addTask} />
    </View>
  );
}

export default App;
