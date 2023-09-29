import React, { useState } from 'react';
import CounterComponent from './CounterComponent';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [duration, setDuration] = useState('');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const product = value1 * value2;

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), value: task, duration:product }]);
      setTask('');
      setDuration('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <View style={styles.screen}>
      <View>
        <CounterComponent value = {value1} setValue={setValue1}/>
        <CounterComponent value = {value2} setValue={setValue2}/> 
        <View>
          <Text> Product: </Text><TextInput value={product.toString()}/>
        </View>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          placeholder={tasks.length == 0? "Add your first task" : "Add another task"}
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TextInput
          value={product.toString()}
        />
        <Button title="ADD" onPress={addTask} disabled={task.length==0} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.value}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
            <Button title="X" onPress={() => removeTask(item.id)} />
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
  duration: { width: '10%' },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  }
});

export default App;
