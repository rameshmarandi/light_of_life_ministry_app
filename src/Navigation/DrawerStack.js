import React from 'react';
import AllScreens from '../Screens/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNav from './TabNav';
import {HomeStack, SettingsStack} from './StackNav';
import DrawerItems from '../Screens/Drawer/DrawerItems';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default function DrawerStack(props) {
  const {isAdmin } = props;
  let {isDarkMode , currentBgColor , currentTextColor} = useSelector(state => state.user);

  return (
    <>
      <Drawer.Navigator
        // initialRouteName={'Home'}
        drawerContent={props => <DrawerItems {...props} />}
        swipeable={false}
        // drawerType="permanent"
        screenOptions={{
          // headerShown: false,
          drawerStyle: {
            backgroundColor: currentBgColor,
            width: '70%',
            // borderBottomRightRadius: 20,
            // borderTopRightRadius:20,
            overflow:"hidden"
          },
        }}>
        {isAdmin ? (
          <>
          <Drawer.Screen
            name="Dashboard"
            component={TabNav}
            options={{
              headerShadowVisible: false,
              headerShown: false,
            }}
          />
          {/* <Drawer.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{
              headerShadowVisible: false,
              headerShown: false,
            }}
          /> */}
        </>) : (
          <Drawer.Screen
            name="Home"
            options={{
              headerShadowVisible: false,
              headerShown: false,
            }}
            component={HomeStack}
          />
        )}

        <Drawer.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="FreeResource"
          component={AllScreens.FreeResource}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Events"
          component={AllScreens.Events}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="ContactWithUs"
          component={AllScreens.ContactWithUs}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Feedback"
          component={AllScreens.Feedback}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="UserNotification"
          component={AllScreens.UserNotification}
          options={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
