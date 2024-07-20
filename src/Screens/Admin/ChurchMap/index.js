import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  FlatList,
  Alert,
  StyleSheet,
  ToastAndroid,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  getResHeight,
  getResWidth,
  getFontSize,
} from '../../../utility/responsive';

import CustomHeader from '../../../Components/CustomHeader';
import {VectorIcon} from '../../../Components/VectorIcon';
import theme from '../../../utility/theme';
import MsgConfig from '../../../Config/MsgConfig';
import {
  ButtonIconComp,
  CopyToClipBoard,
  EmptyUserProfile,
  StatusBarComp,
} from '../../../Components/commonComp';
import WaveButton from '../../../Components/WaveButton';
import GoogleUIComp from '../../../Components/GoogleMapComp';
import CustomBottomSheet from '../../../Components/CustomBottomSheet';

const ChurchMap = React.memo(props => {
  const {navigation} = props;
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const bottomSheetRef = useRef(null);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);
  const [isLongPressed, setLongPress] = useState(false);
  const openBottomSheetWithContent = content => {
    setBottomSheetContent(content);
    bottomSheetRef.current?.open();
  };
  const showToast = key => {
    ToastAndroid.show(`${key} link copied!`, ToastAndroid.SHORT);
  };
  let contactUsDemodata = [
    {
      title: 'Contact Information',
      tableSection: [
        {
          lableName: 'Mobile',
          lableValue: '+91 8989898989',
        },
        {
          lableName: 'Email',
          lableValue: 'lightoflifeministry@gmail.com',
        },
      ],
    },
    {
      title: ' Social Media Links',
      tableSection: [
        {
          lableName: 'Facebook',
          lableValue: 'https://www.facebook.com/',
          isLink: true,
        },
        {
          lableName: 'Instagram',
          lableValue: 'https://www.instagram.com/',
          isLink: true,
        },
        {
          lableName: 'Youtube',
          lableValue: 'https://www.youtube.com/@Lightoflife_ministries.',
          isLink: true,
        },
      ],
    },
  ];
  const singleUserCardData = item => {
    // const {userBio} = item;

    // console.log('sing_user', userBio);
    return (
      <View
        style={{
          flex: 1,
          // padding: '5%',
          alignItems: 'center',
        }}>
        <Text>Raessdf</Text>
      </View>
    );
  };

  let isSelected = isLongPressed;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentBgColor,
      }}>
      <StatusBarComp />
      <View style={{}}>
        <CustomHeader
          backPress={() => {
            navigation.goBack();
            setLongPress(false);
          }}
          // isDeleteIcon = {}
          screenTitle={MsgConfig.ChurchMap}
          isDelete={isSelected}
          // filterIcon={() => {}}
        />
      </View>
      <CustomBottomSheet ref={bottomSheetRef} modalHeight={getResHeight(90)}>
        {bottomSheetContent}
      </CustomBottomSheet>
      <View
        style={{
          position: 'absolute',
          bottom: getResHeight(7),
          right: getResWidth(7),
          zIndex: 9,
        }}>
        <WaveButton
          onPress={() => {
            openBottomSheetWithContent(singleUserCardData());
          }}
        />
      </View>
      <GoogleUIComp />
    </SafeAreaView>
  );
});

const style = StyleSheet.create({});
export default ChurchMap;
