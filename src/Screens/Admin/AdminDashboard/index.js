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

import useScrollDirection from '../../../Components/useScrollDirection';
import {adminDashboardCardData} from '../../../Components/StaticDataHander.js';
import ExampleUsage from '../../../Components/ExampleUsage.js';

const initialState = {
  filteredData: adminDashboardCardData,
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
    const filtered = adminDashboardCardData
      .filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    updateState({filteredData: filtered});
    setTimeout(() => {
      updateState({isLoading: false});
    }, 300);
  }, [searchText]);

  const {scrollY, scrollDirection} = useScrollDirection();

  const transform =
    scrollDirection === 'up'
      ? {transform: [{translateY: -100}, {scale: 0.9}]}
      : {transform: [{translateY: 0}, {scale: 1}]};

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
      {/* <Header scrollDirection={scrollDirection} /> */}
      {/* {console.log('opaciy', opacity)} */}

      <MarqueeComp textRender={`Nice to see you back , Mr Ramesh`} />
      <View style={{marginTop: '3%', paddingHorizontal: '1%'}}>
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
        <Animated.FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '20%'}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item, index}) => {
            switch (index) {
              case 0:
                return (
                  <>
                    <SquareCardComp
                      filteredData={filteredData}
                      onPress={item => {
                        // pushScreen(item.routeName)
                        console.log('Navigate_route', item.routeName);
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
