import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
import Add from './Add';

const Stack = createNativeStackNavigator();

const App = () => { 
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    console.log("adding ",newTask)
    setTasks([...tasks, {id: Date.now().toString(), value: newTask}]);
  };

  const removeTask = (taskId) => {
    console.log("removing ",taskId);
    setTasks(tasks.filter((t) => t.id !==taskId));
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
