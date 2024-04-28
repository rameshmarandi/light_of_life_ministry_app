import React ,{useState, memo , useRef}from 'react';

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
} from 'react-native';
import theme from '../../../utility/theme';
import {useSelector} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Button } from 'react-native-elements';
import CustomHeader from '../../../Components/CustomHeader';
import {StatusBarComp} from '../../../Components/commonComp';
import MarqueeComp from '../../../Components/MarqueeComp';
import * as Animatable from 'react-native-animatable';
import MsgConfig from '../../../Config/MsgConfig';
import SectionHeader from '../../../Components/SectionHeader';
import { StyleSheet } from 'react-native';
import { getFontSize, getResHeight } from '../../../utility/responsive';
import { backgroundColorHandler, textColorHandler } from '../../../Components/commonHelper';
import QuickRouteComp from '../../../Components/QuickRouteComp';
import { ALL_LINKS } from '../../../Config/constants';
import GoogleMapComp from '../../../Components/GoogleMapComp';
// import YoutubePlayer from 'react-native-youtube-iframe'; 

const {width} = Dimensions.get('window');
const itemWidth = width - 40; // Adjust this according to your layout

const images = [
  'https://i.pinimg.com/originals/34/18/a4/3418a4a2c4d02d5890a8b3bde35d8e3c.jpg',
  'https://dailyverses.net/images/en/kjv/xl/matthew-1-21-2.jpg',
  'https://nenow.in/wp-content/uploads/2022/08/Independence-Day-2022.png',

  'https://im.indiatimes.in/content/2023/Aug/Independence-Day-speech4_64ca45b727e08.jpg',
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.9;


const languageArray = [
  {key: 'hindi', tabTitle: 'Hindi', bg: 'blue'},
  {key: 'english', tabTitle: 'English', bg: 'green'},
  {key: 'marathi', tabTitle: 'Marathi', bg: 'red'},
];


const index = (props) => {
  const {navigation} = props
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
     state => state.user,
  );
const [   activeSlide , setActiveSlide] = useState(0)
_renderItem = ({item}) => {
  return (
    <View
      style={[
        styles.slide,
        {
          borderRadius: 10,
          overflow: 'hidden',
        },
      ]}>
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );
};

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
        }}
        onPressNotificaiton={() => {
          navigation.navigate("UserNotification")
        }}
        centerLogo={true}
      />
      <MarqueeComp textRender={`Nice to see you back , Mr Ramesh`} />
      <View
        style={{
          // paddingBottom:"50%"
          // flex: 1,
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator = {false}
          // contentContainerStyle={{paddingBottom:"20%"}}
          renderItem={({item, index}) => {
            switch (index) {
                case 0   : return(<>
               <MainCardComp/>
                </>)
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};


const MainCardComp = ()=>{

    let cardDataArray  = [

        {
            title:"Total Members",
            count : 100
        },
        {
            title:"Momentous",
            count : 100
        },

    ]
    return(<>

    <FlatList
    data = {cardDataArray}
    />
    </>)
}

export default index;
