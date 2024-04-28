import React, {components, createRef, useRef, useState} from 'react';
import {
  TextInput as RNInput,
  Platform,
  StyleSheet,
  Text,
  TouchableSensitivity,
  View,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import PhoneInput from 'react-native-phone-number-input';
import {Button} from 'react-native-elements';
import { VectorIcon } from './VectorIcon';

import theme from '../utility/theme';
import { getFontSize, getResHeight } from '../utility/responsive';
import { backgroundColorHandler, textColorHandler } from './commonHelper';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Dropdown} from 'react-native-element-dropdown';
// import moment from 'moment';

// import {
//   SCREENWIDTH,
//   SCREENHEIGHT,
//   getFontSize,
//   getResWidth,
//   getResHeight,
//   wp,
//   hp,
// } from '../utility/responsive';
// import theme from '../utility/theme';
// import {VectorIcon} from '../components/VectorIcon';
// import {
//   backgroundColorHandler,
//   changeDateFormat,
//   textColorHandler,
// } from '../components/commonHelper';
// import {getYears, removeSpace} from '../components/commonFunction';



const CustomHeader = props => {
  const {Hamburger, backPress ,onPressNotificaiton, backgroundColor, screenTitle,centerLogo} = props;
  
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );
  
  return (
    <>
      <SafeAreaView
        style={{
          // flex:1,
        //   backgroundColor: backgroundColor ? backgroundColor : backgroundColorHandler()
        }}>
         
        <View
          style={{
            width: '100%',
            paddingHorizontal: '4%',
            // paddingTop:"3%",
            // backgroundColor:backgroundColor? backgroundColor:  backgroundColorHandler(),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth:Hamburger ? 0.5 : 0,
            borderBottomColor:  currentBgColor,
          }}>
          {Hamburger && (
            <Button
              type={'clear'}
              onPress={Hamburger}
              iconPosition="right"            
              icon={
                <VectorIcon
                  type={'Ionicons'}
                  name={'menu'}
                  size={getFontSize(3.9)}
                  color={currentTextColor}
                  style={{
                  }}
                />
              }
              iconContainerStyle={{
              }}
              containerStyle={[
                {
                  width: getResHeight(5),
                  height: getResHeight(5),
                  justifyContent:"center",
                  backgroundColor:currentBgColor,
                  borderRadius: getResHeight(100),
                },
              ]}
              buttonStyle={[
                {
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,
                },
              ]}
            />
          )}
          {backPress && (
            <View style={{
              flexDirection:"row",
              alignItems:"center"
            }}>
            <Button
              type={'clear'}
              onPress={backPress}
              iconPosition="right"            
              icon={
                <VectorIcon
                  type={'Ionicons'}
                  name={'chevron-back'}
                  size={getFontSize(2.5)}
                  color = {currentBgColor}
                  style={{
                  
                  }}
                />
              }
              iconContainerStyle={{
              }}
              containerStyle={[
                {
                  width: getResHeight(5),
                  height:getResHeight(5),
                  // justifyContent:"center",
                  backgroundColor:currentBgColor,
                  backgroundColor:isDarkMode ? theme.color.dimWhite :  theme.color.primary,
                  borderRadius: getResHeight(100),
                },
              ]}
              buttonStyle={[
                {
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,
                },
              ]}
            />

            <Text style={{
              fontSize: getFontSize(2),
              fontFamily: theme.font.medium,
              color: currentTextColor,
              // marginTop:getResHeight(1),
              marginLeft:"6%"
            }}>{screenTitle}</Text>
            </View>
          )}

          {centerLogo && typeof centerLogo == 'boolean' && (
            // <View
            //   style={{
               
            //     // borderRadius: 100,
            //     // marginLeft:"-15%",
            //     backgroundColor:"red",
            //     borderRadius: getResHeight(100)
            //   }}>

              <Image
                source={theme.assets.church_logo_origianl}
                resizeMode="cover"
                style={{
                  width: getResHeight(8),
                height: getResHeight(8),
                // backgroundColor:"red",
                borderRadius: getResHeight(100)
                //   borderRadius: 100,
                }}
              />
           
          )}
          {onPressNotificaiton  && (
            <>
            <TouchableOpacity
            onPress={onPressNotificaiton}
            >
             <Button
             type={'clear'}
             onPress={onPressNotificaiton}
             iconPosition="right"            
             icon={
               <VectorIcon
                 type={'MaterialIcons'}
                 name={'notifications'}
                 size={getFontSize(3.5)}
                 color={ currentTextColor}
                 style={{
                 }}
               />
             }
             iconContainerStyle={{
             }}
             containerStyle={[
               {
                 width: getResHeight(5),
                 height: getResHeight(5),
                 justifyContent:"center",
                //  backgroundColor: `${backgroundColorHandler()}`,
                 borderRadius: getResHeight(100),
               },
             ]}
             buttonStyle={[
               {
                 width: '100%',
                 height: '100%',
                 borderRadius: 100,
               },
             ]}
           />
           <View style={{
            height: getResHeight(2.5),
            width: getResHeight(2.5),
            borderRadius: getResHeight(100),
            borderWidth:0.8,
            borderColor: "white",
            // currentTextColor,
            backgroundColor: 'red',
            // currentBgColor,
            position:"absolute",
            right : "2%",
            top:"5%",
            justifyContent:"center",
            alignItems:"center"
           }}>
            <Text style={{
              color:'white',
              //  currentTextColor,
              fontFamily: theme.font.medium,
              fontSize: getFontSize(1.5)
            }}>13</Text>
         
           </View>
           </TouchableOpacity>
           </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
// export default CustomHeader
export default React.memo(CustomHeader);
