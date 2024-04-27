import React, {useState, useEffect, memo} from 'react';
import {
  Text,
  View,
  Switch,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import MsgConfig from '../../Config/MsgConfig';
import {getFontSize, getResHeight, getResWidth} from '../../utility/responsive';
import {
  textColorHandler,
  backgroundColorHandler,
  setAsyncValue,
  getAsyncValue,
} from '../../Components/commonHelper';
import theme from '../../utility/theme';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {
  setBackgroundColor,
  setDarkMode,
  setTextColor,
} from '../../reducer/Auth';
import {styles} from './DrawerItem.style';
import {VectorIcon} from '../../Components/VectorIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { CommonButtonComp } from '../../Components/commonComp';

const DrawerItems = ({navigation}) => {
  const dispatch = useDispatch();
  let {isDarkMode, currentBgColor, curentTextColor} = useSelector(
    state => state.user,
  );

  // useEffect(() => {
  //   // const fetchDarkMode = async () => {
  //   //   const res = await getAsyncValue('darkMode');
  //   //   setDarkMode(res === 'true');
  //   // };
  //   // fetchDarkMode();
  // }, []);

  let iconFontSize = getFontSize(3);
  let navRoute = [
    {
      id: 1,
      lable: MsgConfig.home,
      route: 'HomePage',
      icon: (
        <VectorIcon
          type={'Entypo'}
          name={'home'}
          //  size ={iconFontSize}
          size={getFontSize(3)}
          color={curentTextColor}
        />
      ),
    },
    {
      id: 1,
      lable: MsgConfig.myProfile,
      route: 'SpecialMoment',
      // route: 'CProfile',
      route: '',
      icon: (
        <VectorIcon
          type={'FontAwesome'}
          name={'user'}
          //  size ={iconFontSize}
          size={getFontSize(2.9)}
          color={curentTextColor}
        />
      ),
    },

    {
      id: 2,
      lable: MsgConfig.freeResource,
      // route: 'FreeResource',
      route: '',
      icon: (
        <VectorIcon
          type={'FontAwesome5'}
          name={'compress-arrows-alt'}
          size={iconFontSize}
          // size={getFontSize(21)}
          color={curentTextColor}
        />
      ),
    },

    {
      id: 3,
      lable: MsgConfig.prayerRequest,
      // route: 'HomePage',
      route: '',
      icon: (
        <VectorIcon
          type={'FontAwesome5'}
          name={'pray'}
          //  size ={iconFontSize}
          size={getFontSize(3.3)}
          color={curentTextColor}
        />
      ),
    },
    {
      id: 4,
      lable: MsgConfig.event,
      // route: 'Events',
      route: '',
      icon: (
        <VectorIcon
          type={'MaterialIcons'}
          name={'event-note'}
          size={iconFontSize}
          // size={getFontSize(25)}
          color={curentTextColor}
        />
      ),
    },

    {
      id: 5,
      lable: MsgConfig.contactWithUs,
      // route: 'ContactWithUs',
      route: '',
      icon: (
        <VectorIcon
          type={'MaterialIcons'}
          name={'contact-mail'}
          size={iconFontSize}
          // size={getFontSize(25)}
          color={curentTextColor}
        />
      ),
    },
    {
      id: 6,
      lable: MsgConfig.feedBack,
      // route: 'Feedback',
      route: '',
      icon: (
        <VectorIcon
          type={'MaterialIcons'}
          name={'feedback'}
          size={iconFontSize}
          // size={getFontSize(25)}
          color={curentTextColor}
        />
      ),
    },
    {
      id: 7,
      lable: MsgConfig.setting,
      // route: 'HomePage',
      route: '',

      icon: (
        <VectorIcon
          type={'Ionicons'}
          name={'settings'}
          size={iconFontSize}
          // size={getFontSize(25)}
          color={curentTextColor}
        />
      ),
    },
    {
      id: 8,
      lable: MsgConfig.darkmode,
      // route: 'HomePage',
      route: '',

      icon: (
        <VectorIcon
          type={'MaterialCommunityIcons'}
          name={isDarkMode ? 'lightbulb-on' : 'lightbulb-on-outline'}
          // size={iconFontSize}
          size={getFontSize(3.3)}
          color={curentTextColor}
        />
      ),
    },
  ];

  const handleDarkMode = async () => {
    dispatch(setDarkMode(!isDarkMode));
    console.log('isDarkMode', isDarkMode);
    if (isDarkMode) {
      dispatch(setTextColor(theme.color.primary));
      dispatch(setBackgroundColor(theme.color.white));
    } else {
      dispatch(setTextColor(theme.color.white));
      dispatch(setBackgroundColor(theme.color.darkTheme));
    }

    // navigation.closeDrawer();
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <View
          style={{
            marginTop: index === 0 ? '5%' : 0,

            // borderBottomColor:`rgba(${curentTextColor},${curentTextColor},0.5)`,
            //  borderBottomWidth:1
          }}>
          <Button
            title={item.lable}
            onPress={() => {
              if (item.id === 8) {
                handleDarkMode(); // Functional for dark/Night mode
              }
              // navigation.navigate(item.route);
              // navigation.closeDrawer();
            }}
            icon={item.icon}
            titleStyle={[styles.btnTitleStyle, {color: curentTextColor}]}
            containerStyle={[
              styles.btnContainerStyle,
              {alignItems: 'flex-start'},
            ]}
            buttonStyle={[
              styles.buttonStyle,
              {backgroundColor: currentBgColor},
            ]}
            letfIcon
          />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView
      style={[styles.drawerContainer, {backgroundColor: currentBgColor}]}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: currentBgColor,
            borderBottomWidth: 0.9,
            borderBottomColor: curentTextColor,
          },
        ]}>
        <View
          style={{
            height: getResHeight(10),
            width: getResHeight(10),
            backgroundColor: 'green',
            borderRadius: getResHeight(100),
            marginVertical: '5%',
          }}>
          <Image
            source={theme.assets.church_logo_origianl}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <View
          style={{
            marginLeft: '5%',
          }}>
          <Text
            style={{
              color: curentTextColor,
              fontFamily: theme.font.bold
            }}>
            Ramesh Marandi
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: backgroundColorHandler()}}>
        <FlatList
          data={navRoute}
          renderItem={renderItem}
          keyExtractor={item => item.id?.toString()}
        />

        <View style={{marginTop: '15%', paddingHorizontal: '5%'}}>
          <Text
            style={{
              alignSelf: 'center',
              color: curentTextColor,
              fontFamily: theme.font.medium,
            }}>
            V 1.0.0
          </Text>
        </View>
      </View>
      {/* <View
          style={{
            width: '90%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '2%',
          }}>
          <CommonButtonComp
            title={'Are you a member?'}
            onPress={() => {
              // navigation.navigate("Login")
              // navigation.closeDrawer();
            }}
            iconLeft
            // loading = {true}
            icon={
              <VectorIcon
                type={'FontAwesome'}
                name={'lock'}
                size={getFontSize(23)}
                color={textInDarkMode()}
              />
            }
          />
        </View> */}
    </SafeAreaView>
  );
};

export default DrawerItems;
// export default memo(DrawerItems);
