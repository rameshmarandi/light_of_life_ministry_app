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
} from 'react-native';
import theme from '../../../utility/theme';
import {useSelector} from 'react-redux';
import CustomHeader from '../../../Components/CustomHeader';
import {StatusBarComp} from '../../../Components/commonComp';
import MarqueeComp from '../../../Components/MarqueeComp';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive';

import SearchBarComp from '../../../Components/SearchBarComp';
import SquareCardComp from '../../../Components/SquareCardComp';
import MsgConfig from '../../../Config/MsgConfig';

const cardDataArray = [
  {id: 0, title: 'All Members', image: theme.assets.members, routeName: ''},
  {
    id: 1,
    title: 'Admin Management',
    image: theme.assets.adminManag,
    routeName: '',
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
  {id: 7, title: 'Contact us', image: theme.assets.contact, routeName: ''},
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
      <View
        style={{
          marginTop: '4%',
        }}>
        <CustomHeader
          backPress={() => {
            props.navigation.goBack();
          }}
          screenTitle={MsgConfig.AdminManag}
        />
      </View>

      <StatusBarComp />

      <View
        style={{
          marginTop: '3%',
          paddingHorizontal: '1%',
        }}>
        <SearchBarComp
          placeholder="Search all admin.."
          isLoading={isLoading}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <View
        style={{
          paddingBottom: getResHeight(10),
          paddingHorizontal: '2%',
          paddingTop: '2%',
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '20%'}}
          renderItem={({item, index}) => {
            // switch (index) {
            //   case 0:
            return (
              <>
                <View
                  style={[
                    theme.styles.cardEffect,
                    {
                      width: '95%',
                      //  paddingVertical:"5%",
                      backgroundColor: currentBgColor,
                      borderWidth: 1,
                      borderColor: currentTextColor,
                      alignSelf: 'center',
                      borderRadius: getResHeight(2),
                      padding: '5%',
                      marginBottom: '5%',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    },
                  ]}>
                  <View>
                    <Image
                      source={{
                        uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1719',
                      }}
                      style={{
                        height: getResHeight(13),
                        width: getResHeight(13),
                        backgroundColor: 'green',
                        borderRadius: getResHeight(100),
                      }}
                    />
                  </View>

                  <View
                    style={{
                        width:"60%",
                      marginLeft: '5%',
                      flexWrap: 'wrap',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(2),
                        fontFamily: theme.font.semiBold,
                        color: currentTextColor
                      }}>
                      Ramesh Marandi
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        alignItems: "center"
                    }}>
                        <View style={{
                            height: getResHeight(1),
                            width: getResHeight(1),
                            borderRadius: getResHeight(100),
                            backgroundColor:index +1 /2 ==0 ? "red" : "green",
                            
                        }}/>
                        <Text style={{
                            marginLeft:"4%",
                            fontFamily: theme.font.medium,
                            fontSize: getFontSize(1.5)
                        }} >In-Active</Text>
                    </View>
                  </View>
                </View>
              </>
            );
            // }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
