import React, { useState } from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  TextInput
} from 'react-native';

const Add = ({navigation}) => {
    const context = React.useContext(AppContext);
    const [newTask, setNewTask] = useState('');
  
    return (
      <View style={styles.screen}>
        <TextInput
            style={styles.label}
            placeholder = {"Add your task"}
            onChangeText={setNewTask}
            placeholderTextColor={'green'}
            value = {newTask}
        />
        <Button title="Cancel" onPress={() => navigation.goBack() } />
        <Button title="Add" onPress={() => { context.addTask(newTask); setNewTask(''); navigation.goBack() } } />
      </View>
    );
  
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    label: { 
      borderColor: 'black',
      color: 'red',
      borderWidth: 1,
      padding:10,
      fontSize: 20,
    }
  });

export default Add;