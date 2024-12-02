import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>TODO LIST</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


