import React, { useState } from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  TextInput
} from 'react-native';

const AddUpper = ({navigation}) => {
    const context = React.useContext(AppContext);
    const [taskUpper, setTaskUpper] = useState('');
  
    return (
      <View style={styles.screen}>
        <TextInput
            style={styles.label}
            placeholder = {"Add your task"}
            onChangeText={setTaskUpper}
            placeholderTextColor={'green'}
            value = {taskUpper}
        />
        <Button title="Cancel" onPress={() => navigation.goBack() } />
        <Button title="Add" onPress={() => { context.addTask(taskUpper.toUpperCase()); setTaskUpper(''); navigation.goBack() } } />
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

export default AddUpper;