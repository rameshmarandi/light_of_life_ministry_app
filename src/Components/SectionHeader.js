import React, {components, createRef, useRef, useState} from 'react';
import {
 
  Text,
  View,
} from 'react-native';

import {
  getFontSize,
} from '../utility/responsive';
import theme from '../utility/theme';
import {textColorHandler} from './commonHelper';

const SectionHeader = props => {
  const {titleTextStyle, sectionTitle} = props;
  return (
    <View style={[{}, props.containerStyle]}>
      <Text
        style={[
          {
            color: `${textColorHandler()}`,
            fontSize: getFontSize(2),
            fontFamily: theme.font.semiBold,
          },
        ]}>
        {sectionTitle}
      </Text>
    </View>
  );
};

export default React.memo(SectionHeader);
