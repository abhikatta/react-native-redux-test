import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // in this following line, the value seems to be directly getting
      // mutated but under the hood createSlice makes another copy of
      // original, updates it and replaces the value for us, so it is
      // kinda like useState here, but the syntax is misleading.
      state.value += 1;
    },
    decrement: state => {
      // TL;DR: same as above, yeah :)

      // in this following line, the value seems to be directly getting
      // mutated but under the hood createSlice makes another copy of
      // original, updates it and replaces the value for us, so it is
      // kinda like useState here, but the syntax is misleading.
      state.value -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // async functions are different:
    // called using : createAsyncThunk
    // name has to be given manually unlike above where redux toolkit
    // automatically defines/gives the name, in async/api call functions
    // we have to manually give the name to the function
  },
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;
