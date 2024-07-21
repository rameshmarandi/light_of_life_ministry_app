import React, {useState, memo, useEffect, useRef} from 'react';

import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
  Keyboard,
} from 'react-native';
import theme from '../../../utility/theme/index.js';
import {useSelector} from 'react-redux';
import CustomHeader from '../../../Components/CustomHeader.js';
import {StatusBarComp} from '../../../Components/commonComp.js';
import MarqueeComp from '../../../Components/MarqueeComp.js';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive/index.js';

import SearchBarComp from '../../../Components/SearchBarComp.js';
import SquareCardComp from '../../../Components/SquareCardComp.js';
import {pushScreen} from '../../../Services/NavigationService.js';

const cardDataArray = [
  {
    id: 0,
    title: 'All Members',
    image: theme.assets.members,
    routeName: 'Members',
  },
  {
    id: 1,
    title: 'Admin Management',
    image: theme.assets.adminManag,
    routeName: 'AdminManagment',
  },
  {id: 2, title: 'Momentous Posts', image: theme.assets.camera, routeName: ''},
  {id: 3, title: 'Daily Verses', image: theme.assets.DBible, routeName: ''},
  {
    id: 4,
    title: 'Notification Controls',
    image: theme.assets.alert,
    routeName: '',
  },
  {id: 5, title: 'Free Resources', image: theme.assets.pdf, routeName: ''},
  {id: 6, title: 'Prayer Request', image: theme.assets.prayer, routeName: ''},
  {
    id: 7,
    title: 'Contact us',
    image: theme.assets.contact,
    routeName: 'AdminContact',
  },
  {
    id: 8,
    title: 'Testimonial Wall',
    image: theme.assets.contact,
    routeName: '',
  },
  {id: 9, title: 'What We Believe', image: theme.assets.contact, routeName: ''},
  {
    id: 10,
    title: 'Church Locations',
    image: theme.assets.churchLocation,
    routeName: 'ChurchMap',
  },
];

const initialState = {
  filteredData: cardDataArray,
  isLoading: false,
  searchText: '',
};

const index = props => {
  const {navigation} = props;
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const [state, setState] = useState(initialState);
  const {filteredData, isLoading, searchText} = state;

  const updateState = newState =>
    setState(prevState => ({...prevState, ...newState}));

  const handleSearch = text => {
    updateState({searchText: text});
  };

  useEffect(() => {
    updateState({isLoading: true});
    const filtered = cardDataArray
      .filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    updateState({filteredData: filtered});
    setTimeout(() => {
      updateState({isLoading: false});
    }, 300);
  }, [searchText]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentBgColor,
      }}>
      <StatusBarComp />

      <CustomHeader
        Hamburger={() => {
          navigation.openDrawer();
          // const dismissKeyboard = () => {
          Keyboard.dismiss();
          // };
        }}
        onPressNotificaiton={() => {
          navigation.navigate('UserNotification');
        }}
        centerLogo={true}
      />
      <MarqueeComp textRender={`Nice to see you back , Mr Ramesh`} />

      <View
        style={{
          marginTop: '3%',
          paddingHorizontal: '1%',
        }}>
        <SearchBarComp
          placeholder="Search menus.."
          isLoading={isLoading}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <View
        style={{
          paddingBottom: getResHeight(20),
          paddingHorizontal: '2%',
          paddingTop: '2%',
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '20%'}}
          renderItem={({item, index}) => {
            switch (index) {
              case 0:
                return (
                  <>
                    <SquareCardComp
                      filteredData={filteredData}
                      onPress={item => {
                        // pushScreen(item.routeName)
                        props.navigation.navigate(item.routeName);
                      }}
                    />
                  </>
                );
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
