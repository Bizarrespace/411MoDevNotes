import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContext from './AppContext';
import Home from './Home';
import Add from './Add';
import AddUpper from './AddUpper';
import AddReverse from './AddReverse';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Add" component={Add}/>
          <Tab.Screen name="AddUpper" component={AddUpper}/>
          <Tab.Screen name="AddReverse" component={AddReverse}/>
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
