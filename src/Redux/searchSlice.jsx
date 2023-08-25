import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "user",
  initialState: {
    user:[],
  },
  reducers: {
    filtervalues: (state, action) => {
    
        state.user = action.payload
       
       
      
    },
    resetFilter: (state) => {
      state.user =[];
      
      console.log(`after clearing filter ${state.user}`)
    },
  },
});

export const { filtervalues, resetFilter } = searchSlice.actions;
export const selectFilter = (state) => state.user.user;
export default searchSlice.reducer;
