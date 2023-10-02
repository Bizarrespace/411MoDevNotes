import React from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.number}> {context.number} </Text>
        <Button title="Add" onPress={() => {navigation.navigate('Add')}} />
        <Button title="Reset" onPress={() => {navigation.navigate('Reset')}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  number: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  },
  taskItem: { 
    color: 'black'
  }
});

export default Home;
