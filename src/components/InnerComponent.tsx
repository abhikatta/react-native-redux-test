import {View, Text, useColorScheme} from 'react-native';
import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../context/store';

const InnerComponent = (): ReactElement => {
  const count = useSelector((state: RootState) => state.counter.value);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        alignItems: 'center',
        paddingTop: 90,
        paddingBottom: 90,
        height: 200,
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
