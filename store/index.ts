import { configureStore } from "@reduxjs/toolkit";
import { greetingSlice } from "features/greeting/greetingSlice";

export const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
