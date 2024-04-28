import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';
import {StatusBarComp} from '../../../Components/commonComp';
import CustomHeader from '../../../Components/CustomHeader';
import MsgConfig from '../../../Config/MsgConfig';
import {useSelector} from 'react-redux';
import {backgroundColorHandler} from '../../../Components/commonHelper';
import {getFontSize, getResHeight} from '../../../utility/responsive';
import theme from '../../../utility/theme';

const UserNotification = props => {
  const {navigation} = props;
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );
 let today_Verbs_Image_URL =   'https://versefortheday.com/wp-content/uploads/2021/05/cropped-bible-verse-for-the-day-logo.png'
            let TemapArray = [0,1,5]

  const _renderComp = ({item, index}) => (
    <View
      style={{
        paddingVertical: '3%',
        marginBottom: '5%',
        //  backgroundColor:"red",
        paddingHorizontal: '3%',
        flexDirection: 'row',
        //  alignItems:"center",
        borderRadius: getResHeight(1),
        borderWidth: 0.5,
        borderColor: currentTextColor,
        flexWrap: 'wrap',
      }}>
      <View style>
        <Image
       
        source={ TemapArray.includes(index) ? theme.assets.birthday : {
                uri: today_Verbs_Image_URL
                  }}
          style={{
            height: getResHeight(7),
            width: getResHeight(7),
            backgroundColor: 'white',
            borderRadius: getResHeight(100),
            borderWidth: 0.2,
            borderColor: currentTextColor,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: '4%',
        }}>
        <Text
          style={{
            fontSize: getFontSize(2),
            color: currentTextColor,
            fontFamily: theme.font.bold,
          }}>
         { TemapArray.includes(index) ? "Happy Birthday":`Today's Verse`}
        </Text>
        <Text
          style={{
            fontSize: getFontSize(1.4),
            color: currentTextColor,
            fontFamily: theme.font.regular,
          }}>
         { TemapArray.includes(index) ? "Dear , Ramesh Marandi ":`For God so loved the world that ..`}
        </Text>
        <View>
          <Text
            style={{
              textDecorationColor: 'underline',
              color: currentTextColor,
            }}>
            Read more..
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentBgColor,
      }}>
      <StatusBarComp />

      <CustomHeader
        backPress={() => {
          navigation.goBack();
        }}
        screenTitle={MsgConfig.notification}
      />
{/* <View style={{ 
    // flex:1,
    
    // paddingBottom: getResHeight(10)
}}
    > */}
      <FlatList
        data={[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
        contentContainerStyle={{
          flex: 1,
          marginTop: '5%',
          paddingHorizontal: '5%',
       
        }}
        keyExtractor={({item, index}) => index?.toString()}
        renderItem={_renderComp}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default UserNotification;
