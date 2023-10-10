import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const App = () => {
  const [makes, setMakes] = useState([]);
  const [models, setmodels] = useState([]);
  const [make, setMake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMakes = async () => {
      setLoading(true);
      const response = await fetch(`https://carapi.app/api/makes?year=2020`);
      const data = await response.json();
      setMakes(data.data);
      setLoading(false);
    }
      fetchMakes().catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if(make) {
      const fetchModels = async () => {
        setLoading(true);
        const response = await fetch(`https://carapi.app/api/models?year=2020&make_id=${make}`);
        //Remember to use back ticks ` instead of quotes ' because then $ will be a part of the string instead of being a variable
        const data = await response.json() //data is the whole json file
        setmodels(data.data); //This gets the array where the cars models are actaully stored
        setLoading(false);
      }
      fetchModels().catch(error => {
        setError(error);
        setLoading(false);
      });
    }
  }, [make]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Picker selectedValue={make} onValueChange={value => setMake(value)}>
        {makes.map(make => <Picker.Item key={make.id} label={make.name} value={make.id} />)}
      </Picker>
      {models.map(model => <Text key={model.id}>{model.name}</Text>)}
    </View>
  );
};

export default App;