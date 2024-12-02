import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Incredible_todo_list</Text>
      <Text style={styles.footerText}>© 2024 Your Company Name. All rights reserved</Text>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
    footer: { 
        padding: 20, 
        borderTopWidth: 1, 
        borderTopColor: '#e7e7e7', 
        alignItems: 'center', 
    }, 
    footerText: { 
        color: '#333', 
        fontSize: 14, 
    },
})