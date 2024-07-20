import React, {memo} from 'react';
import {StatusBar, View, StyleSheet, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Button, Image} from 'react-native-elements';
import {getFontSize, getResHeight, getResWidth} from '../utility/responsive';
import theme from '../utility/theme';

import {useSelector} from 'react-redux';
import {VectorIcon} from './VectorIcon';

export const StatusBarComp = () => {
  let {isDarkMode} = useSelector(state => state.user);
  console.log('memo at status baser', isDarkMode);
  return (
    <StatusBar
      animated={true}
      // backgroundColor={isDarkMode ? '#333' : '#f0f0f0'} // Example of custom colors based on dark mode
      barStyle={'default'}
    />
  );
};
export const CopyToClipBoard = text => {
  try {
    Clipboard.setString(`${text}`);
  } catch (error) {
    console.error('clip_board_text_copy_faild', error);
  }
};
export const EmptyUserProfile = props => {
  const {onPress} = props;
  let {isDarkMode, currentTextColor, currentBgColor} = useSelector(
    state => state.user,
  );
  return (
    <>
      <View
        style={{
          width: getResHeight(18),
          height: getResHeight(18),
          borderRadius: getResHeight(100),
          backgroundColor: theme.color.dimWhite,
          marginTop: getResHeight(-10),
          borderWidth: 2,
          borderColor: currentTextColor,
          marginLeft: getResWidth(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <VectorIcon
          type={'FontAwesome'}
          name={'user'}
          size={getFontSize(8)}
          color={isDarkMode ? theme.color.darkTheme : currentTextColor}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: getResHeight(1),
            right: getResWidth(-1.1),
            zIndex: 999,
          }}>
          <ButtonIconComp
            onPress={() => {
              alert('Psfsf');
            }}
            icon={
              <VectorIcon
                type={'FontAwesome'}
                name={'camera'}
                size={getFontSize(2.1)}
                color={currentBgColor}
              />
            }
            containerStyle={{
              width: getResHeight(5),
              height: getResHeight(5),
              backgroundColor: currentTextColor,

              borderRadius: getResHeight(100),
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export const ButtonIconComp = props => {
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );
  const {
    onPress,
    icon,
    iconStyle,
    disabled,
    iconContainerStyle,
    iconPosition,
    containerStyle,
  } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button
          type={'clear'}
          disabled={disabled}
          onPress={onPress}
          iconPosition={iconPosition}
          icon={icon}
          iconStyle={iconStyle}
          iconContainerStyle={iconContainerStyle ? iconContainerStyle : [, {}]}
          containerStyle={
            containerStyle
              ? containerStyle
              : [
                  {
                    width: getResHeight(5),
                    height: getResHeight(5),
                    // justifyContent:"center",
                    backgroundColor: currentBgColor,
                    // backgroundColor: isDarkMode
                    //   ? theme.color.dimWhite
                    //   : theme.color.primary,
                    borderRadius: getResHeight(100),
                  },
                ]
          }
          buttonStyle={[
            {
              width: '100%',
              height: '100%',
              borderRadius: 100,
            },
          ]}
        />
      </View>
    </>
  );
};
export const CommonButtonComp = props => {
  const {
    onPress,
    title,
    icon,
    rightIcon,
    leftIcon,
    isLoading,
    buttonStyle,
    backgroundColor,
    titleStyle,
    disabled,
    containerStyle,
  } = props;
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );
  return (
    <Button
      title={title}
      onPress={onPress}
      icon={icon}
      titleStyle={[
        styles.btnTitleStyle,
        {
          color: currentBgColor,
        },
      ]}
      disabledStyle={{
        backgroundColor: theme.color.disabledBtn,
      }}
      disabledTitleStyle={[
        styles.btnTitleStyle,
        {
          color: '#cccccc',
        },
      ]}
      containerStyle={[
        styles.btnContainerStyle,
        {
          // elevation: 6,
          borderRadius: 100,
        },
      ]}
      buttonStyle={[
        {
          width: '100%',
          height: '100%',
          borderRadius: 100,
          backgroundColor: currentTextColor,
        },
      ]}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  // Prayer modal button style
  btnTitleStyle: {
    textAlign: 'left',
    fontSize: getFontSize(1.5),
    fontFamily: theme.font.semiBold,
    marginLeft: '5%',
  },
  btnContainerStyle: {
    marginBottom: getResHeight(6),
    width: '100%',
    height: getResHeight(5),
  },
});
