import React, {useState, useCallback, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ripple from 'react-native-material-ripple';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {VectorIcon} from '../Components/VectorIcon';
import {getFontSize, getResHeight} from '../utility/responsive';
import theme from '../utility/theme';
import {useSelector} from 'react-redux';
import {AdminHomeStack, ProfileStack} from './StackNav';

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
];

const CustomTabBar = ({
  navigation,
  selectedTabIndex,
  currentBgColor,
  currentTextColor,
}) => {
  const [selectedTab, setSelectedTab] = useState(selectedTabIndex);

  const onPress = useCallback(
    index => {
      setSelectedTab(index);
      navigation.navigate(tabArrays[index].routeNames);
    },
    [navigation],
  );

  return (
    <View style={[styles.tabBar, {backgroundColor: '#EA2C62'}]}>
      {tabArrays.map((route, index) => {
        const isFocused = useIsFocused();

        return (
          <Ripple
            key={index}
            onPress={() => onPress(index)}
            rippleCentered
            rippleSize={100}
            rippleColor={theme.color.dimWhite}
            style={styles.tabButton}>
            <Animated.View
              style={[
                styles.iconContainer,
                {
                  borderTopWidth: index === selectedTab ? 2 : 0,
                  borderTopColor: 'white',
                },
              ]}>
              <VectorIcon
                type={route.icon.type}
                name={route.icon.name}
                color={'white'}
                size={getFontSize(2.5)}
              />
              {selectedTab === index && (
                <Animated.Text
                  style={[
                    styles.tabText,
                    {
                      color: 'white',
                    },
                  ]}>
                  {isFocused ? route.title : ''}
                </Animated.Text>
              )}
            </Animated.View>
          </Ripple>
        );
      })}
    </View>
  );
};

const TabNav = props => {
  const {currentBgColor, currentTextColor} = useSelector(state => state.user);
  const tabBarOptions = useMemo(
    () => ({
      initialRouteName: tabArrays[0].routeNames,
      currentBgColor,
      currentTextColor,
      selectedTabIndex: 0,
    }),
    [currentBgColor, currentTextColor],
  );

  return (
    <View style={styles.navigatorContainer}>
      <Tab.Navigator
        tabBar={navigation => (
          <CustomTabBar {...navigation} {...tabBarOptions} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  tabBar: {
    height: getResHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5.5,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: getResHeight(8),
    width: getResHeight(8),
    // borderRadius:""
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  tabText: {
    fontFamily: theme.font.medium,
    fontSize: getFontSize(1.5),
    // marginTop: 4,
  },
});

export default TabNav;
