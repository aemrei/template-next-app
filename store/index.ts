import { greetingApi } from "@/features/greeting/greetingApi";
import { configureStore } from "@reduxjs/toolkit";
import { greetingSlice } from "features/greeting/greetingSlice";

export const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
    [greetingApi.reducerPath]: greetingApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(greetingApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
