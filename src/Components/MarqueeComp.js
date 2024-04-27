import React, {memo} from 'react';
import {View, Text} from 'react-native';
import theme from '../utility/theme';

import MarqueeView from 'react-native-marquee-view';
import {getFontSize} from '../utility/responsive';
const MarqueeComp = props => {
  const {textRender} = props;
  return (
    <View>
      <MarqueeView
        style={{
          backgroundColor: theme.color.iceWhite,
          width: '100%',
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: getFontSize(2),
              fontFamily: theme.font.semiBold,
              color: theme.color.error,
            }}>
            {textRender}
          </Text>
        </View>
      </MarqueeView>
    </View>
  );
};

export default memo(MarqueeComp);
