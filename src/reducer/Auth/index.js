import { createSlice } from '@reduxjs/toolkit';
import theme from '../../utility/theme';

const initialState = {
  isDarkMode: true, // Assuming you have user data
  currentTextColor: theme.color.white,
  currentBgColor: theme.color.darkTheme
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
    setTextColor(state, action) {
      state.currentTextColor = action.payload;
    },
    setBackgroundColor(state, action) {
      state.currentBgColor = action.payload;
    },
  },
});

export const { setDarkMode , setTextColor , setBackgroundColor} = authSlice.actions;
export default authSlice.reducer;