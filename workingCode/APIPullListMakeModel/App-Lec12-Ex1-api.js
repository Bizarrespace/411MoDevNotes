import React, {useEffect, useState} from 'react';
import {View, 
  Text, 
  ActivityIndicator, 
  StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedmodel] = useState({id: null, name: null});

  useEffect(() => {
    const fetchMakes = async () => {
      if (makes.length > 0 || loading) {
        return;
      }
      setLoading(true);

      const response = await fetch(`https://carapi.app/api/makes?year=2020`);
      const data = await response.json();
      // setTimeout(function(){
        setMakes(data.data);

        setLoading(false);

        // setSelectedMake(JSON.stringify(data.data));
        setSelectedMake(null);
      // }, 3000);
  }
    fetchMakes().catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedMake) {
      const fetchModels = async () => {
        const response = await fetch(`https://carapi.app/api/models?year=2020&make_id=${selectedMake}`);
        const data = await response.json();
        setModels(data.data);
        setLoading(false);
      }
      fetchModels().catch(error => {
        setError(error);
        setLoading(false);
      });
    }
  }, [selectedMake]);

  if (loading) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#0000ff"
      />
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        prompt="Choose Car Make"
        selectedValue={selectedMake}
        onValueChange={(itemValue, itemIndex) => {
            setSelectedMake(itemValue);
          }}>
        {
          makes.length? makes.map(make => (
            <Picker.Item key={make.id} label={make.name} value={make.id} />
          )) : <Picker.Item label="(Car Makes not loaded)" value={null} />
        }
      </Picker>

      <Picker
        style={styles.picker}
        prompt = "Choose car model"
        selectedValue={selectedModel.id}
        onValueChange={itemValue => {
          const selected = models.find(model => model.id == itemValue);
          setSelectedmodel({id: selected.id, name: selected.name});
        }}>
      {
        models.map(models => 
          <Picker.Item key={models.id} label={models.name} value={models.id} />)
      }
      </Picker>
      <Text style={styles.info}>{`${selectedModel.id}, ${selectedModel.name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  error: {
    flex: 1,
    //justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
  },
  picker: {
    color: 'black',
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
  },
});

export default App;
