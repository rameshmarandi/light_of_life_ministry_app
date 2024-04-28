import { createSlice } from '@reduxjs/toolkit';
import theme from '../../utility/theme';

const initialState = {
  isDarkMode: true, // Assuming you have user data,
  isAdmin :false,
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
    setAdmin(state, action) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setDarkMode ,setAdmin, setTextColor , setBackgroundColor} = authSlice.actions;
export default authSlice.reducer;