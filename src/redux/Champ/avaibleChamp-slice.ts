import { Champion } from "@/types/champTypes";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  avaibleList: [],
  isLoading: true,
};

export const fetchAvaibleChamps = createAsyncThunk(
  "fetchApiChamps",
  async () => {
    const result = await fetch("");
    console.log(result.json());
    return result.json();
  }
);

export const avaibleChampList = createSlice({
  name: "avaibleChampList",
  initialState,
  reducers: {},
});

export const {} = avaibleChampList.actions;
export default avaibleChampList.reducer;
