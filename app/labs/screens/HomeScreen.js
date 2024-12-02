import { View, Text, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import ToDoForm from '../components/toDoForm';
import ToDoList from '../components/toDoList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {

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
    };

    return (
        <MainLayout>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('About')}
            >
                <Text
                    style={styles.buttonText}
                >
                    Go to About
                </Text>
            </TouchableOpacity>
            <ToDoList tasks={toDo}/>
            <ToDoForm addTaskFunc={addTask} />
        </MainLayout>    
    );
};

export default HomeScreen;

const styles = StyleSheet.create({ 
    button: {
      backgroundColor: '#1338BE', 
      paddingVertical: 12, 
      paddingHorizontal: 32, 
      borderRadius: 5, 
      alignItems: 'center',
    },
    buttonText: { 
      color: '#FFFFFF', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
  });