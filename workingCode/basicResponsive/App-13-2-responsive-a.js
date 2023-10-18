import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

function App() {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };
    
    Dimensions.addEventListener('change', handleOrientationChange);
    //What this does is add an event listener to the Dimensions object, whenever this object changes, it will call the handleOrientationChange function, essentially making it an event handler function

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <View>
      {orientation === 'portrait' ? (
        //=== used to match both the value and the type, helps with clearing up problems with JS type coercision where it might consider some things equal even though they are really not
        //Example of that would be: string '0' equal to 0 but if we wanted just 0 it would not be the effect that we want
        <Text>You're in Portrait mode!</Text>
      ) : (
        <> 
          <Text>You're in Landscape mode!</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum. Sodales neque sodales ut etiam.</Text>
        </>
        
      )}
    </View>
  );
}
//The <> is a lightweight way to group the elements without adding another node to the DOM, another node would be adding another view, to the DOM which is the representation of the structure of the document
export default App;
