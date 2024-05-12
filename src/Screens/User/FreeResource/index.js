import React, {Component, useState, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
  Image,
  Animated,
  useWindowDimensions,
  FlatList,
  Switch,
} from 'react-native';
import theme from '../../../utility/theme';

import {connect, useSelector} from 'react-redux';
import {store} from '../../../utility/store';
import * as Animatable from 'react-native-animatable';

import CustomHeader from '../../../Components/CustomHeader';
import {ALL_LINKS} from '../../../Config/constants';
import {
  backgroundColorHandler,
  textColorHandler,
} from '../../../Components/commonHelper';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive';
import MsgConfig from '../../../Config/MsgConfig';
import SquareCardComp from '../../../Components/SquareCardComp';

const FreeResourceData = [
  {
    id: 6,
    title: 'E-Books (Free)',
    image: theme.assets.ebook,
    route: ALL_LINKS.E_BOOKS,
  },
  {
    id: 1,
    title: 'Theology & More',
    image: theme.assets.theology,
    route: 'theology',
  },
  {
    id: 2,
    title: 'GotQuestion (English)',
    image: theme.assets.gotquestion,
    route: ALL_LINKS.GOTQUESTION_ENGLISH,
  },
  {
    id: 3,
    title: 'GotQuestion (Hindi)',
    image: theme.assets.gotquestion,
    route: ALL_LINKS.GOTQUESTION_HINDI,
  },
  {
    id: 0,
    title: 'Missionary Biography',
    image: theme.assets.missionary,
    route: ALL_LINKS.MISSIONARY_BIOGRAPHY,
  },
  {
    id: 4,
    title: 'Christian Rights',
    image: theme.assets.unity,
    // route: CHRISTIAN_RIGHTS,
  },
];

const FreeResource = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColorHandler(), // Assuming backgroundColorHandler is defined elsewhere
      }}>
      <View>
        <CustomHeader
          backPress={() => {
            navigation.goBack();
          }}
          screenTitle={MsgConfig.freeResource}
        />
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: '5%',
        }}>
        <View
          style={{
            width: getResWidth(100), // Assuming SCREENWIDTH is defined elsewhere
            alignSelf: 'center',
            padding: '4%',
            flexDirection: 'row',
          }}>
          <SquareCardComp
          onPress = {(item)=>{
            // alert('clikd')
            console.log("item", item)
          }}
          filteredData={FreeResourceData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FreeResource;
