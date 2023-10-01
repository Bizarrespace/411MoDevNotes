import React from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text
} from 'react-native';

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Button title="Add" onPress={() => {navigation.navigate('Add')}} />
      </View>
      <FlatList
        data={context.tasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.taskItem}>{item.value}</Text>
            <Button title="X" onPress={() => context.removeTask(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
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
