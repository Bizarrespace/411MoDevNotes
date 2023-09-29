import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const CounterComponent = ({ value, setValue }) => {
    const incrementCount = () => {
        setValue(value + 1); 
    };
    
    const decrementCount = () => {
        setValue(value - 1);
    };  

    return (
        <View>
            <Text>Count: {value} </Text>
            <View style={styles.buttons}>
                <Button  title= "Add one" onPress={incrementCount}/>
                <Button  title= "Subtrack one" onPress={decrementCount}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
});

export default CounterComponent