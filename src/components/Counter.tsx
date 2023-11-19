import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../context/store';
import {decrement, increment, incrementByValue} from '../context/counterSlice';
import InnerComponent from './InnerComponent';
const Counter = (): React.ReactElement => {
  const count = useSelector((state: RootState) => state.counter.value);
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar />
      <View>
        <InnerComponent />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? '#22222d' : '#ddddaa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginBottom: 60,
            fontSize: 60,
            color: isDarkMode ? '#ddddaa' : '#22222d',
          }}>
          {count}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(increment())}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: isDarkMode ? '#ddddaa' : '#22222d',
                },
              ]}>
              increase
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(decrement())}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: isDarkMode ? '#ddddaa' : '#22222d',
                },
              ]}>
              reduce
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Increment By"
            keyboardType="numeric"
            inputMode="numeric"
            onChangeText={e => setAmount(Number(e))}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(incrementByValue(amount))}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    width: 100,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Counter;
