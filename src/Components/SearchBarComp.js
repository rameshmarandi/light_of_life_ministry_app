import {View, Text} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import theme from '../utility/theme';
import {useSelector} from 'react-redux';
import {getFontSize} from '../utility/responsive';
import {fonts} from 'react-native-elements/dist/config';

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
        searchIcon={{
          iconStyle: {
            fontSize: getFontSize(3),
          },
        }}
        showLoading={isLoading}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        autoFocus={autoFocus ? autoFocus : false}
        onChangeText={onChangeText}
        value={value}
        round={round ? round : 10}
        cursorColor={isDarkMode ? theme.color.darkTheme : currentTextColor}
        containerStyle={[
          containerStyle
            ? containerStyle
            : {
                width: '96%',
                alignSelf: 'center',
                borderTopWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: currentBgColor,
                margin: 0,
                alignItems: 'center',
                // backgroundColor:"red"
              },
        ]}
        inputStyle={{
          color: isDarkMode ? theme.color.darkTheme : theme.color.darkTheme,

          fontSize: getFontSize(1.6),
          fontFamily: theme.font.medium,
          // backgroundColor:"red",
          alignItems: 'center',
          marginTop: '1%',
          // backgroundColor:"red",
          // paddingTop:"4%"
        }}
        // cursorColor={'red'}
        inputContainerStyle={{
          alignItems: 'center',
          backgroundColor: isDarkMode ? currentTextColor : theme.color.dimWhite,
        }}
      />
    </View>
  );
};

export default SearchBarComp;
