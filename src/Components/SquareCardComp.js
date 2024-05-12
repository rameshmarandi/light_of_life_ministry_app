import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getFontSize, getResHeight, getResWidth} from '../utility/responsive';
import theme from '../utility/theme';
import {ButtonIconComp} from './commonComp';
import {VectorIcon} from './VectorIcon';
import {Image} from 'react-native';

const SquareCardComp = ({filteredData  , onPress}) => {
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const renderSquareCardItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={ ()=>{onPress(item)}}
        style={[styles.cardContainer, {
          borderColor: currentTextColor}]}
        key={item.id.toString()}>
        {index === 0 && item.id === 0 && (
          <View style={styles.notificationIndicator} />
        )}
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            height: getResHeight(8),
            width: getResHeight(8),
            alignSelf:"center"
          }}
        />
      
        <View
          style={[
            {
              width:"100%",
              flexDirection: 'row',
              marginTop:"3%",
              
            },
            styles.cardContent,
          ]}>
          <Text
            style={[
              styles.cardTitle,
              {
                color: currentTextColor,
              },
            ]}>
            {item.title}
          </Text>
          <ButtonIconComp
          onPress={()=>onPress(item)}
            icon={
              <VectorIcon
                type={'FontAwesome5'}
                name={'arrow-right'}
                size={getFontSize(2.5)}
                color={currentTextColor}
              />
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container , {
      flexDirection :filteredData.length === 1 ? 'column' : 'row'
    }]}>
      {filteredData.map((item, index) => (
        <React.Fragment key={item.id}>
          {renderSquareCardItem({item, index})}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    
  },
  cardContainer: {
    width: getResWidth(44),
    height: getResHeight(17),
    borderWidth: 1,
    borderRadius:getResHeight(1),
    marginBottom: getResHeight(2),
    paddingVertical: getResHeight(1),
    paddingHorizontal: getResHeight(2),
  },
  notificationIndicator: {
    position: 'absolute',
    right: getResHeight(0.5),
    top: getResHeight(0.5),
    height: getResHeight(2),
    width: getResHeight(2),
    borderRadius: getResHeight(100),
    backgroundColor: 'red',
  },
  cardContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    width:"70%",
    
    fontSize: getFontSize(1.7),
    fontFamily: theme.font.medium,
  },
});

export default SquareCardComp;
