import React, { useState } from 'react';
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

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), value: task, duration }]);
      setTask('');
      setDuration('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput
          placeholder={tasks.length == 0? "Add your first task" : "Add another task"}
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TextInput
          placeholder="dur"
          onChangeText={setDuration}
          value={duration}
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
