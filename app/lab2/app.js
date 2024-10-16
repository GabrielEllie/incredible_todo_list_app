/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import ToDoList from './toDoList';
import ToDoForm from './toDoForm';

function App() {
  return (
    <View>
      <Text>Lab 2 Work:</Text>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

export default App;
