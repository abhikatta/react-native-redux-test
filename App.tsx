import {Provider} from 'react-redux';
import Counter from './src/components/Counter';
import React from 'react';
import {store} from './src/context/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
