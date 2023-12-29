import { configureStore } from "@reduxjs/toolkit";
import avaibleChampList from "@/redux/Champ/avaibleChamp-slice";

export const store = configureStore({
  reducer: { avaibleChampList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

