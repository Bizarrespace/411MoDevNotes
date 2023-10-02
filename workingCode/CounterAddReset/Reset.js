import React from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button
} from 'react-native';

const Reset = ({navigation}) => {
    const context = React.useContext(AppContext);
  
    return (
      <View style={styles.screen}>
        <Button title="Reset" onPress={() => { context.setNumber(0); navigation.goBack() } } />
        <Button title="Cancel" onPress={() => navigation.goBack() } />
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

export default Reset;