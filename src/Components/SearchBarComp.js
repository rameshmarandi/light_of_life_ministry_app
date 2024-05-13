import {View, Text} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import theme from '../utility/theme';
import {useSelector} from 'react-redux';
import {getFontSize} from '../utility/responsive';

const SearchBarComp = props => {
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );
  const {
    autoFocus,
    placeholder,
    containerStyle,
    onChangeText,
    value,
    placeholderTextColor,
    autoCapitalize,
    isLoading,
    round,
  } = props;
  return (
    <View>
      <SearchBar
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : theme.color.dimGray
        }
        showLoading={isLoading}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        autoFocus ={autoFocus ?autoFocus :false}
        onChangeText={onChangeText}
        value={value}
        round={ round ?round : 10}
      
        containerStyle={[
          containerStyle
            ? containerStyle
            : {
                width: '100%',
                alignSelf: 'center',
                borderTopWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: currentBgColor,
                margin:0,
                alignItems:"center"
                // backgroundColor:"red"
              },
        ]}
        inputStyle={{
          color: isDarkMode ? theme.color.darkTheme : theme.color.darkTheme,

          fontSize: getFontSize(2),
          fontFamily: theme.font.medium,
          // backgroundColor:"red",
          alignItems:"center"
        }}
        // cursorColor={'red'}
        inputContainerStyle={{
          alignItems:"center",
          backgroundColor: isDarkMode ? currentTextColor : theme.color.dimWhite,
        }}
      />
    </View>
  );
};

export default SearchBarComp;
