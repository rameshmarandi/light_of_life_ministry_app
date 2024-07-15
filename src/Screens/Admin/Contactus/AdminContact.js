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
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  getResHeight,
  getResWidth,
  getFontSize,
} from '../../../utility/responsive';

import CustomHeader from '../../../Components/CustomHeader';
import SearchBarComp from '../../../Components/SearchBarComp';
import SmallMenuComp from '../../../Components/SmallMenuComp';
import ConfirmAlert from '../../../Components/ConfirmAlert';
import CustomBottomSheet from '../../../Components/CustomBottomSheet';
import {VectorIcon} from '../../../Components/VectorIcon';
import theme from '../../../utility/theme';
import MsgConfig from '../../../Config/MsgConfig';
import {
  ButtonIconComp,
  CopyToClipBoard,
  EmptyUserProfile,
  StatusBarComp,
} from '../../../Components/commonComp';
import {ScrollView} from 'react-native-gesture-handler';
import FormikHandler from '../../../Components/FormikHandler';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import InAppBrowserComp, {
  openInAppBrowser,
} from '../../../Components/InAppBrowserComp';
import WaveButton from '../../../Components/WaveButton';
import FAQList from '../../../Components/FAQList';
import {fonts} from 'react-native-elements/dist/config';

const initialState = {
  filteredData: [],
  isLoading: false,
  searchText: '',
};

const AdminContact = props => {
  const {navigation} = props;
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const [state, setState] = useState(initialState);
  //   const [userData, setUserData] = useState([...demoUsers]);
  const [showAlert, setShowAlert] = useState(false);
  const sheetRef1 = useRef(null);

  const updateState = newState =>
    setState(prevState => ({...prevState, ...newState}));
  const {filteredData, isLoading, searchText} = state;

  const handleSearch = text => {
    updateState({searchText: text});
  };

  //   useEffect(() => {
  //     updateState({isLoading: true});
  //     const filtered = [].filter(item =>
  //       item.userBio['Full name']
  //         .toLowerCase()
  //         .includes(searchText.toLowerCase()),
  //     );

  //     updateState({setUserData: filtered});
  //     setTimeout(() => {
  //       updateState({isLoading: false});
  //     }, 300);
  //   }, [searchText]);

  const bottomSheetRef = useRef(null);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);

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
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentBgColor,
      }}>
      <StatusBarComp />
      <View
        style={
          {
            //   marginTop: '4%',
          }
        }>
        <CustomHeader
          backPress={() => {
            navigation.goBack();
          }}
          screenTitle={MsgConfig.contactUS}
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
      <View
        style={{
          marginTop: '3%',
          paddingHorizontal: '1%',
        }}>
        <SearchBarComp
          placeholder="Search all members..."
          isLoading={isLoading}
          onChangeText={handleSearch}
          value={searchText}
        />
        <CustomBottomSheet ref={bottomSheetRef} modalHeight={500}>
          {bottomSheetContent}
        </CustomBottomSheet>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            // flex: 1,
            marginBottom: getResHeight(12),
          }}>
          <View
            style={{
              paddingHorizontal: '2%',
              marginTop: '5%',
            }}>
            {contactUsDemodata.map((item, index) => {
              const {title, tableSection} = item;
              return (
                <>
                  <View
                    style={[
                      {
                        borderWidth: 1,
                        width: '100%',
                        borderRadius: getResHeight(1),
                        padding: '5%',
                        //   paddingVertical: '2%',
                        //   paddingHorizontal: '3%',
                        marginBottom: '5%',
                        borderColor: currentTextColor,
                      },
                      // theme.styles.cardEffect,
                    ]}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={[
                          style.lableStyle,
                          {
                            //   width: '100%',
                            color: currentTextColor,
                            // marginTop: '5%',
                            marginBottom: '6%',
                          },
                        ]}>
                        {title}
                      </Text>
                      <View
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: getResHeight(-1),
                        }}>
                        <ButtonIconComp
                          onPress={() => {}}
                          icon={
                            <VectorIcon
                              type={'FontAwesome'}
                              name={'edit'}
                              size={getFontSize(2.3)}
                              color={currentBgColor}
                            />
                          }
                          containerStyle={{
                            width: getResHeight(4),
                            height: getResHeight(4),
                            backgroundColor: currentTextColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: getResHeight(100),
                          }}
                        />
                      </View>
                    </View>
                    {tableSection.map((e, i) => {
                      return (
                        <>
                          <View
                            style={[
                              style.lableContainer,
                              {
                                marginBottom: '4%',
                              },
                            ]}>
                            <Text
                              style={[
                                style.lableStyle,
                                {
                                  color: currentTextColor,
                                  width: index == 0 ? '27%' : '35%',
                                },
                              ]}>{`${e.lableName}  : `}</Text>
                            <TouchableOpacity
                              disabled={!e.isLink}
                              onPress={() => {
                                openInAppBrowser(e.lableValue);
                              }}
                              onLongPress={() => {
                                CopyToClipBoard(`${e.lableValue}`);
                                if (Platform.OS === 'android') {
                                  showToast(e.lableName);
                                } else {
                                  Alert.alert(`${e.lableName} link copied!`);
                                }
                              }}>
                              <Text
                                style={[
                                  style.lableStyle,
                                  {
                                    width: '100%',
                                    textDecorationLine: e.isLink
                                      ? 'underline'
                                      : 'none',
                                    color: currentTextColor,
                                  },
                                ]}>
                                {e.lableValue.length > 22
                                  ? `${e.lableValue.slice(0, 22)}..`
                                  : `${e.lableValue}  `}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      );
                    })}
                  </View>
                </>
              );
            })}
            <View style={[style.faqContainer]}>
              <Text
                style={[
                  {
                    color: currentTextColor,
                    fontFamily: theme.font.bold,
                    fontSize: getFontSize(2.2),
                  },
                ]}>
                FAQ Section
              </Text>
              <View style={{}}>
                <ButtonIconComp
                  onPress={() => {}}
                  icon={
                    <VectorIcon
                      type={'Entypo'}
                      name={'plus'}
                      size={getFontSize(2.3)}
                      color={currentBgColor}
                    />
                  }
                  containerStyle={{
                    width: getResHeight(4),
                    height: getResHeight(4),
                    backgroundColor: currentTextColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: getResHeight(100),
                  }}
                />
              </View>
            </View>
            <FAQList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  lableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableStyle: {
    fontFamily: theme.font.bold,
    fontSize: getFontSize(2),
    // width: getResWidth(27),
  },
  faqContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default AdminContact;
