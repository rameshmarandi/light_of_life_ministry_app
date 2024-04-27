import React from 'react';
import AllScreens from '../Screens/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNav from './TabNav';
import {HomeStack, SettingsStack} from './StackNav';
import DrawerItems from '../Screens/Drawer/DrawerItems';

const Drawer = createDrawerNavigator();

export default function DrawerStack(props) {
  const {isAdmin} = props;
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'Home'}
        drawerContent={props => <DrawerItems {...props} />}
        swipeable={false}
        // drawerType="permanent"
        screenOptions={{
          // headerShown: false,
          drawerStyle: {
            backgroundColor: 'red',
            width: '70%',
            // borderBottomRightRadius: 40,
          },
        }}>
        {isAdmin ? (
          <Drawer.Screen
            name="Home"
            component={TabNav}
            options={{
              headerShadowVisible: false,
              // headerShown: false,
            }}
          />
        ) : (
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
      </Drawer.Navigator>
    </>
  );
}
