import React from 'react';
import AllScreens from '../Screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {transitionCard, screenOptions} from './NavigationSettings';
// import {screenOptions} from './NavigationSettings';

const Stack = createNativeStackNavigator();

export function HomeStack(props) {
  return (
    <>
      <Stack.Navigator screenOptions={{...transitionCard, ...screenOptions}}>
        <Stack.Screen
          initialRouteName={'HomePage'}
          name={'HomePage'}
          component={AllScreens.HomePage}
          // options={screenOptions}
        />
      </Stack.Navigator>
    </>
  );
}
export function AdminHomeStack(props) {
  return (
    <>
      <Stack.Navigator screenOptions={{...transitionCard, ...screenOptions}}>
        <Stack.Screen
          initialRouteName={'Dashboard'}
          name={'Dashboard'}
          component={AllScreens.Dashboard}
          // options={screenOptions}
        />
        <Stack.Screen
          name={'Profile'}
          component={AllScreens.ProfilePage}
          // options={screenOptions}
        />
      </Stack.Navigator>
    </>
  );
}

export function SettingsStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{...transitionCard, ...screenOptions}}>
        <Stack.Screen
          name={'Settings'}
          component={AllScreens.Settings}
          // options={screenOptions}
        />
      </Stack.Navigator>
    </>
  );
}
export function ProfileStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{...transitionCard, ...screenOptions}}>
        <Stack.Screen
          name={'Profile'}
          component={AllScreens.ProfilePage}
          // options={screenOptions}
        />
      </Stack.Navigator>
    </>
  );
}
