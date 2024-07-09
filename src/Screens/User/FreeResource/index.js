import React from 'react';
import {View, SafeAreaView} from 'react-native';
import theme from '../../../utility/theme';

import CustomHeader from '../../../Components/CustomHeader';
import {ALL_LINKS} from '../../../Config/constants';
import {backgroundColorHandler} from '../../../Components/commonHelper';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive';
import MsgConfig from '../../../Config/MsgConfig';
import SquareCardComp from '../../../Components/SquareCardComp';
import InAppBrowserComp, {
  openInAppBrowser,
} from '../../../Components/InAppBrowserComp';

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
    route: ALL_LINKS.CHRISTIAN_RIGHTS,
  },
];

const FreeResource = ({navigation}) => {
  const handleOpenBrowser = url => {
    openInAppBrowser(url);
  };

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
            width: getResWidth(100),
            alignSelf: 'center',
            padding: '4%',
            flexDirection: 'row',
          }}>
          <SquareCardComp
            onPress={item => {
              handleOpenBrowser(item.route);
            }}
            filteredData={FreeResourceData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FreeResource;
