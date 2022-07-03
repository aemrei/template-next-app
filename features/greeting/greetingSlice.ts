import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type HelloState = {
  name: string;
  asyncName: string;
};

type HelloAction = {
  type: string;
  payload: string;
};

const initialState: HelloState = {
  name: "Initial state",
  asyncName: "-",
};

const setName = (state: HelloState, action: HelloAction) => {
  state.name = action.payload;
};

export const fetchGreetingData = createAsyncThunk<{ name: string }>(
  "greeting/getData",
  async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {
    setName: (state, action) => {
      setName(state, action);
    },
  },
  extraReducers: {
    [fetchGreetingData.pending.type]: (state, action) => {
      state.asyncName = "Loading...";
    },
    [fetchGreetingData.fulfilled.type]: (state, action) => {
      state.asyncName = action.payload.name;
    },
  },
});
