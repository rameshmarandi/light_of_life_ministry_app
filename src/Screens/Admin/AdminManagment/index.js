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
import {Button, Menu, Divider, PaperProvider} from 'react-native-paper';

import {ButtonIconComp, StatusBarComp} from '../../../Components/commonComp';
import MarqueeComp from '../../../Components/MarqueeComp';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive';

import SearchBarComp from '../../../Components/SearchBarComp';
import SquareCardComp from '../../../Components/SquareCardComp';
import MsgConfig from '../../../Config/MsgConfig';
import {VectorIcon} from '../../../Components/VectorIcon';
import SmallMenuComp from '../../../Components/SmallMenuComp';
import ConfirmAlert from '../../../Components/ConfirmAlert';
import CustomBottomSheet from '../../../Components/CustomBottomSheet';
// import { updateState } from '../../../Helpers/CommonHelpers';

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

const menuItems = [{title: 'Update'}, {title: 'Block'}, {title: 'Delete'}];

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

  const [showAlert, setShowAlert] = useState(false);

  const sheetRef1 = useRef(null);
  const sheetRef2 = useRef(null);

  const updateState = newState =>
    setState(prevState => ({...prevState, ...newState}));

  const {filteredData, isLoading, searchText} = state;

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

  renderContent1 = () => {
    return (
      <>
        <View>
          <Text>Ramesh Test herer</Text>
        </View>
      </>
    );
  };
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
          filterIcon={() => {}}
        />
      </View>
      <ConfirmAlert
        visible={showAlert}
        onCancel={() => setShowAlert(false)}
        onConfirm={() => {
          setShowAlert(false);
        }}
      />
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

      <CustomBottomSheet
        sheetRef={sheetRef1}
        initialSnapIndex={-1}
        snapPoints={['25%', '50%']}
        renderContent={renderContent1}
        headerTitle="Sheet 1"
      />

      <View
        style={{
          zIndex: -9999,
          paddingBottom: getResHeight(10),
          paddingHorizontal: '2%',
          paddingTop: '2%',
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '20%'}}
          renderItem={({item, index}) => {
            return (
              <>
                <View
                  style={[
                    theme.styles.cardEffect,
                    {
                      width: getResWidth(90),
                      backgroundColor:
                        (index + 1) % 2 !== 0
                          ? theme.color.dimGray
                          : currentBgColor,
                      borderWidth: 1,
                      borderColor: currentTextColor,
                      alignSelf: 'center',
                      borderRadius: getResHeight(2),

                      padding: getResHeight(2),
                      marginBottom: '5%',
                      flexDirection: 'row',
                      flexWrap: 'wrap', // Enable wrapping
                    },
                  ]}>
                  <View
                    style={{
                      position: 'absolute',
                      top: getResHeight(1.4),
                      right: getResWidth(2),
                      zIndex: 9999,
                    }}>
                    <SmallMenuComp
                      buttonLabel={openMenu => {
                        return (
                          <>
                            <ButtonIconComp
                              onPress={() => {
                                if (sheetRef1 && sheetRef1.current) {
                                  sheetRef1.current.close();
                                }
                                openMenu();
                              }}
                              disabled={(index + 1) % 2 !== 0}
                              icon={
                                <VectorIcon
                                  type={'Entypo'}
                                  name={'dots-three-vertical'}
                                  size={getFontSize(2.1)}
                                  color={currentTextColor}
                                />
                              }
                              containerStyle={{
                                width: getResHeight(5),
                                height: getResHeight(5),
                                backgroundColor:
                                  (index + 1) % 2 !== 0
                                    ? theme.color.dimGray
                                    : currentBgColor,

                                borderRadius: getResHeight(100),
                              }}
                            />
                          </>
                        );
                      }}
                      menuItems={menuItems}
                      onMenuPress={menuIndex => {
                        if (menuIndex == 0) {
                          sheetRef1.current.expand();
                        }
                        if (menuIndex == 2) {
                          setShowAlert(true);
                        }
                      }}
                    />
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      left: getResWidth(2),
                      top: getResHeight(1.5),
                      height: getResHeight(2),
                      width: getResHeight(2),
                      borderRadius: getResHeight(100),
                      backgroundColor: (index + 1) % 2 !== 0 ? 'red' : 'green',
                    }}
                  />
                  <View
                    style={{
                      width: getResWidth(26),
                      // backgroundColor:"green"
                    }}>
                    <Image
                      source={{
                        uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1719',
                      }}
                      style={{
                        height: getResHeight(10),
                        width: getResHeight(10),
                        borderRadius: getResHeight(100),
                      }}
                    />
                  </View>

                  <View
                    style={{
                      width: getResWidth(48), // Set the width to allow wrapping within this container
                      marginLeft: '5%',
                      flexWrap: 'wrap',
                    }}>
                    <Text
                      style={{
                        maxWidth: '100%',
                        fontSize: getFontSize(2),
                        fontFamily: theme.font.semiBold,
                        color: currentTextColor,
                      }}>
                      Ramesh Marandi
                    </Text>

                    <Text
                      style={{
                        width: '98%',
                        fontFamily: theme.font.medium,
                        fontSize: getFontSize(1.5),
                        color: currentTextColor,
                      }}>
                      ramesh.test@gmail.com
                    </Text>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
