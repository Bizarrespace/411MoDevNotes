import React, {useState} from 'react';
import {View, Text, PanResponder, StyleSheet} from 'react-native';

// Reports the touch events, draws a movable item

//Runs by going through panResponder, which gives stuff to the parent which then draws stuff

const TouchableView = ({onRelease, onDown, onMove, at, str}) => {
  const panResponder = PanResponder.create({
    onrShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      onDown(evt.nativeEvent.touches, {
        x: evt.nativeEvent.locationX,
        y: evt.nativeEvent.locationY,
      });
    },
    onPanResponderMove: (evt, gestureState) => {
      onMove(evt.nativeEvent.touches, {
        x: evt.nativeEvent.locationX,
        y: evt.nativeEvent.locationY,
      });
    },
    onPanResponderRelease: (evt, gestureState) => {
      onRelease(evt.nativeEvent.touches, {
        x: evt.nativeEvent.locationX,
        y: evt.nativeEvent.locationY,
      });
    },
  });

  return (
    <View {...panResponder.panHandlers} style={styles.touchableView}>
      <Text left={at.x} top={at.y} style={styles.movableText}>
        {str ? str : 'Touch Me'}
      </Text>
    </View>
  );
};





// App: embeds TouchableView, logs events, updates location of Text
const App = () => {
  const [touchLog, setTouchLog] = useState([]);
  const [itemPosition, setItemPosition] = useState({x: 0, y: 0});
  const [str, setStr] = useState('Right Here!');

  const handleDown = (touches, at) => {
    setTouchLog(prev => [
      ...prev,
      `Down count: ${touches.length}, x: ${at.x.toFixed(1)}, y: ${at.y.toFixed(
        1,
      )}`,
    ]);
    setItemPosition({
      x: at.x,
      y: at.y,
    });
    setStr('down');
  };

  const handleMove = (touches, at) => {
    setTouchLog(prev => [
      ...prev,
      `Move count: ${touches.length}, x: ${at.x.toFixed(1)}, y: ${at.y.toFixed(
        1,
      )}`,
    ]);
    if (touches.length > 0) {
      setItemPosition({
        x: at.x,
        y: at.y,
      });
    }
    setStr('move');
  };

  const handleRelease = (touches, at) => {
    setTouchLog(prev => [
      ...prev,
      `Release count: ${touches.length}, x: ${at.x.toFixed(
        1,
      )}, y: ${at.y.toFixed(1)}`,
    ]);
    setItemPosition({
      x: at.x,
      y: at.y,
    });

    setStr('release');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exploring Touch (such a drag)</Text>
      <TouchableView
        onDown={handleDown}
        onMove={handleMove}
        onRelease={handleRelease}
        at={itemPosition}
        str={str}
      />
      <View style={styles.logArea}>
        <Text style={styles.logText}>{touchLog.slice(-10).join('\n')}</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  logArea: {
    height: 250,
    width: 300,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logText: {
    fontSize: 14,
    color: 'black',
  },



  touchableView: {
    width: 300,
    height: 300,
    backgroundColor: '#AEEEEE',
    marginBottom: 20,
  },
  movableText: {
    fontSize: 16,
    color: '#004D40',
    position: 'absolute',
  },
});

export default App;
