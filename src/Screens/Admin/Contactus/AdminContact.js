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
import SectionHeader from '../../../Components/SectionHeader';
import RadioAndCheckBoxComp from '../../../Components/RadioAndCheckBoxComp';

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
          screenTitle={MsgConfig.contactUS}
          isDelete={isSelected}
          // filterIcon={() => {}}
        />
      </View>

      <View
        style={{
          paddingHorizontal: '1%',
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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
                    style={{
                      width: isSelected ? getResWidth(84) : getResWidth(91),
                      flexDirection: 'row',
                      alignSelf: isSelected ? 'flex-start' : 'center',
                    }}>
                    {isSelected && <RadioAndCheckBoxComp />}

                    <TouchableWithoutFeedback
                      onLongPress={() => {
                        setLongPress(true);
                      }}>
                      <View
                        style={[
                          {
                            borderWidth: 1,
                            width: '100%',
                            borderRadius: getResHeight(1),
                            padding: '5%',
                            marginBottom: '5%',
                            alignSelf: 'center',
                            borderColor: currentTextColor,
                          },
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
                                color: currentTextColor,
                                fontFamily: theme.font.bold,
                                marginBottom: '6%',
                              },
                            ]}>
                            {title}
                          </Text>
                          <View
                            style={{
                              position: 'absolute',
                              right: getResWidth(-1.4),
                              top: getResHeight(-1),
                            }}>
                            <ButtonIconComp
                              onPress={() => {
                                setLongPress(false);
                              }}
                              icon={
                                <VectorIcon
                                  type={'Entypo'}
                                  name={'plus'}
                                  size={getFontSize(2)}
                                  color={currentBgColor}
                                />
                              }
                              containerStyle={[
                                style.btnContainer,
                                {
                                  backgroundColor: currentTextColor,
                                },
                              ]}
                            />
                          </View>
                        </View>
                        {tableSection.map((e, i) => {
                          let trimLength = isSelected ? 25 : 27;
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
                                      fontSize: getFontSize(1.6),
                                      // width: isSelected
                                      //   ? getResWidth(18)
                                      //   : getResWidth(25),
                                      // width: index == 0 ? '27%' : '35%',
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
                                      Alert.alert(
                                        `${e.lableName} link copied!`,
                                      );
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
                                        marginLeft: '5%',
                                      },
                                    ]}>
                                    {e.lableValue.length > trimLength
                                      ? `${e.lableValue.slice(0, trimLength)}..`
                                      : `${e.lableValue}  `}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        })}
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </>
              );
            })}
            <View
              style={{
                paddingHorizontal: '2%',
                marginVertical: getResHeight(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <SectionHeader sectionTitle={`Frequenly asked questions`} />
              <ButtonIconComp
                onPress={() => {}}
                icon={
                  <VectorIcon
                    type={'Entypo'}
                    name={'plus'}
                    size={getFontSize(2)}
                    color={currentBgColor}
                  />
                }
                containerStyle={[
                  style.btnContainer,
                  {
                    backgroundColor: currentTextColor,
                  },
                ]}
              />
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
    fontFamily: theme.font.medium,
    fontSize: getFontSize(1.6),
  },
  btnContainer: {
    width: getResHeight(4),
    height: getResHeight(4),

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getResHeight(100),
  },
});
export default AdminContact;
