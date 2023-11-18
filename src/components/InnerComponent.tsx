import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../context/store';

const InnerComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        alignItems: 'center',
        marginTop: 80,
        height: 100,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: isDarkMode ? 'white' : 'black',
        }}>
        {count}
      </Text>
    </View>
  );
};

export default InnerComponent;
