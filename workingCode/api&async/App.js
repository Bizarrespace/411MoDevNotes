import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // https://carapi.app/

  const getCar = async () => {
    try {
      const response = await fetch('https://carapi.app/api/models?verbose=yes&year=2020&make_id=14');
      const data = await response.json();
          setData(data);
          setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
  }
  
  useEffect(() => { //React knows that useEffect() is asych, so you dont have to tell
    getCar();
  }, []);
  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; //If still loading return spinning indicator 
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  // Render your data
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default FetchDataComponent;
