import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppContext from './components/AppContext';
import Home from './components/Home';
import Add from './components/Add';
import Reset from './components/Reset';

const Drawer = createDrawerNavigator();

const App = () => { 
  const [number, setNumber] = useState(0);

  const contextValue = {
    setNumber,
    number
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Add" component={Add}/>
          <Drawer.Screen name="Reset" component={Reset}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
