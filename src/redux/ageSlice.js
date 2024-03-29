import { createSlice } from "@reduxjs/toolkit";

const ageSlice = createSlice({
  name: "age",
  initialState: "",
  reducers: {
    setAge: (state, action) => (state = action.payload),
  },
});

export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;