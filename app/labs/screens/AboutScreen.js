import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const getCurrentDate = () => { 
    const today = new Date(); 
    const options = { weekday: 'long', 
      year: 'numeric', month: 'long', 
      day: 'numeric' }; 
      return today.toLocaleDateString('en-US', options);
  }

  const handleNamePress = () => {
    alert('hehehe that tickles');
  };
  
  const currentDate = getCurrentDate();

  return (
    <MainLayout>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        > 
          <Text 
            style={styles.buttonText}>
              Go to Home
          </Text> 
        </TouchableOpacity>

        <Text style={styles.title} >Incredible ToDo List</Text>
        <TouchableOpacity
          onPress={handleNamePress}>
          <Text style={styles.text} >Gabriel Barillos</Text>
        </TouchableOpacity>
        <Text style={styles.text} >{currentDate}</Text>
    </MainLayout>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({ 
  button: {
    backgroundColor: '#8A45FF', 
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
  text: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
  }
});