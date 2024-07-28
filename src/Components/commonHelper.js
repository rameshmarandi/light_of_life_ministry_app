import React, {useState} from 'react';
import theme from '../utility/theme';

import {useSelector, useDispatch} from 'react-redux';

// export const extractVideoId = youtubeUrl => {
//   const match = youtubeUrl.match(/v=([^&]+)/);
//   if (match) {
//     return match[1];
//   }
//   return null; // Return null if no match found
// };
// export const changeDateFormat = (date, format, dateFormat) => {
//   if (dateFormat) {
//     return moment(date, dateFormat).format(format ? format : 'DD MMM, YY');
//   }
//   return moment(date).format(format ? format : 'DD MMM, YY');
// };
export const backgroundColorHandler = () => {
  let {isDarkMode} = useSelector(state => state.user);
  if (isDarkMode) {
    return theme.color.darkTheme;
  } else {
    return theme.color.white;
  }
};
export const checkIsDarkMode = () => {
  let {isDarkMode} = useSelector(state => state.user);
  if (isDarkMode) {
    return true;
  } else {
    return false;
  }
};

export const textColorHandler = () => {
  let {isDarkMode} = useSelector(state => state.user);
  if (isDarkMode) {
    return theme.color.white;
  } else {
    return theme.color.primary;
  }
};

export const setAsyncValue = async (key, value) => {
  let setVal = value;
  try {
    if (typeof setVal === 'boolean') {
      setVal = setVal.toString();
    }
    await AsyncStorage.setItem(key, setVal);
  } catch {}
};
export const getAsyncValue = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
};
