import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import theme from '../../../utility/theme';
import {ButtonIconComp, StatusBarComp} from '../../../Components/commonComp';
import CustomHeader from '../../../Components/CustomHeader';
import MsgConfig from '../../../Config/MsgConfig';
import {
  getFontSize,
  getResHeight,
  getResWidth,
} from '../../../utility/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {VectorIcon} from '../../../Components/VectorIcon';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';

const index = props => {
  const {navigation} = props;
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  let bioData = [
    {
      firstName: 'Ramesh',
      lastName: 'Marandi',
      email: 'rameshtest@gmail.com',
      phone: '9090909090',
      dob: '12 April 1998',
      dateOfBatptism: '16 Jun 2017',
    },
  ];
  const renderItem = ({item}) => (
    <View style={{marginBottom: 20}}>
      <View style={{
        flexDirection:"row",
         justifyContent:"space-between"
      }}>
      <Text>
        Name:
      </Text>
      <Text>
       {item.firstName} {item.lastName}
      </Text>
      </View>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Date of Birth: {item.dob}</Text>
      <Text>Date of Baptism: {item.dateOfBatptism}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentBgColor,
      }}>
      <StatusBarComp />

      <View>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: getResHeight(1),
            paddingLeft: '5%',
          }}>
          <CustomHeader
            backPress={() => {
              navigation.navigate('Dashboard');
            }}
            // screenTitle={MsgConfig.profile}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: getResHeight(30),
            backgroundColor: 'red',
          }}>
          <Image
            source={{
              uri: 'https://dailyverses.net/images/en/niv/romans-15-2-2.jpg',
            }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: getResHeight(1.2),
              right: getResWidth(1.5),
            }}>
            <ButtonIconComp
              onPress={() => {}}
              icon={
                <VectorIcon
                  type={'FontAwesome'}
                  name={'camera'}
                  size={getFontSize(2.1)}
                  color={currentBgColor}
                />
              }
              containerStyle={{
                width: getResHeight(5),
                height: getResHeight(5),
                backgroundColor: currentTextColor,

                borderRadius: getResHeight(100),
              }}
            />
          </View>
          <View
            style={{
              width: getResHeight(18),
              height: getResHeight(18),
              borderRadius: getResHeight(100),
              backgroundColor: theme.color.dimWhite,
              marginTop: getResHeight(-10),
              borderWidth: 2,
              borderColor: currentTextColor,
              marginLeft: getResWidth(3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VectorIcon
              type={'FontAwesome'}
              name={'user'}
              size={getFontSize(8)}
              color={isDarkMode ? theme.color.darkTheme : currentTextColor}
            />
            <View
              style={{
                position: 'absolute',
                bottom: getResHeight(1),
                right: getResWidth(-1.1),
              }}>
              <ButtonIconComp
                onPress={() => {}}
                icon={
                  <VectorIcon
                    type={'FontAwesome'}
                    name={'camera'}
                    size={getFontSize(2.1)}
                    color={currentBgColor}
                  />
                }
                containerStyle={{
                  width: getResHeight(5),
                  height: getResHeight(5),
                  backgroundColor: currentTextColor,

                  borderRadius: getResHeight(100),
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[ theme.styles.cardEffect, {
          flex:1,
          paddingHorizontal: '5%',
          marginTop: getResHeight(15),
          width:"100%",
          // backgroundColor:"red",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingTop:"5%"
        }]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: currentTextColor,
              fontFamily: theme.font.semiBold,
              fontSize: getFontSize(1.9),
            }}>
            Perosnal Informaton
          </Text>
          <ButtonIconComp
            onPress={() => {}}
            icon={
              <VectorIcon
                type={'FontAwesome'}
                name={'edit'}
                size={getFontSize(3)}
                color={currentTextColor}
              />
            }
            containerStyle={{
              width: getResHeight(5),
              height: getResHeight(5),
              backgroundColor: currentBgColor,

              borderRadius: getResHeight(100),
            }}
          />
        </View>
        <View>
          <FlatList
            data={bioData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;






