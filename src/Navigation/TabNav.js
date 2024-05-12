import React, {useState, useRef, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';
import {VectorIcon} from '../Components/VectorIcon';
import {getFontSize, getResHeight} from '../utility/responsive';
import theme from '../utility/theme';
import {AdminHomeStack, HomeStack, ProfileStack, SettingsStack} from './StackNav';
import screenOptions from './NavigationSettings';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const tabArrays = [
  {
    title: 'Home',
    icon: {
      type: 'Foundation',
      name: 'home',
    },
    routeNames: 'Dashboard',
    component: AdminHomeStack,
  },
  {
    title: 'Profile',
    icon: {
      type: 'FontAwesome5',
      name: 'user-alt',
    },
    routeNames: 'Profile',
    component: ProfileStack,
  },
  // {
  //   title: 'Settings',
  //   icon: {
  //     type: 'Fontisto',
  //     name: 'player-settings',
  //   },
  //   routeNames: '',
  //   component: "",
  // },
];

const CustomTabBar = ({navigation, selectedTabIndex }) => {
  const [selectedTab, setSelectedTab] = useState(selectedTabIndex);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: -getResHeight(2),
      duration: 1800,
      useNativeDriver: true,
      easing: Easing.easeInOut,
    }).start();
  }, [selectedTab]);

  const onPress = index => {
    setSelectedTab(index);
    navigation.navigate(tabArrays[index].routeNames);
  };

  return (
    <View style={styles.tabBar}>
      {tabArrays.map((route, index) => {
        const isFocused = useIsFocused();

        return (
          <Ripple
            key={index}
            onPress={() => onPress(index)}
            style={
              {
                // overflow: 'hidden',
              }
            }
            rippleCentered={true}
            rippleSize={100}
            rippleColor={theme.color.dimWhite}>
            <Animated.View
              style={{
                height: getResHeight(10),
                width: getResHeight(10),
                borderTopWidth:index == selectedTab  ?1 : 0,
                borderTopColor:"white",
                // borderTopLeftRadius: getFontSize(100),
                // borderTopRightRadius: getFontSize(100),
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                // transform: [
                //   {translateY: index === selectedTab ? translateY : 0},
                // ],
                backgroundColor: theme.color.darkTheme,
              }}>
              <VectorIcon
                type={route.icon.type}
                name={route.icon.name}
                color={
                  selectedTab === index
                    ? theme.color.white
                    : theme.color.dimWhite
                }
                size={getFontSize(2.5)}
              />

              {selectedTab === index && (
                <>
                  <Animated.Text
                    style={{
                      fontFamily:
                        selectedTab === index
                          ? theme.font.medium
                          : theme.font.regular,
                      color:
                        selectedTab === index
                          ? theme.color.white
                          : theme.color.iceWhite,
                    }}>
                    {isFocused ? route.title : ''}
                  </Animated.Text>
                  <Animated.View
                    style={{
                      height: getResHeight(0.5),
                      width: getResHeight(0.5),
                      backgroundColor: 'white',
                      borderRadius: getResHeight(100),
                    }}
                  />
                </>
              )}
            </Animated.View>
          </Ripple>
        );
      })}
    </View>
  );
};

export default function TabNav(props) {
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
 );
  return (
    <>
      <Tab.Navigator
        tabBar={navigation => (
          <CustomTabBar
            {...navigation}
            initialRouteName={tabArrays[0].routeNames}
            selectedTabIndex={0}
          />
        )}>
        {tabArrays.map((e, i) => (
          <Tab.Screen
            key={i}
            name={e.routeNames}
            component={e.component}
            options={{headerShown: false}}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: getResHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.darkTheme,
    // borderTopRightRadius: getResHeight(2),
    // borderTopLeftRadius: getResHeight(2),
    // borderTopWidth:1,
    // borderColor:"#efefef",

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5.5,
  },
});
