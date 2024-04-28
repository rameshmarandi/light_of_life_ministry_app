import React, {Component, useState, useRef} from 'react';
import {
  Text,
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
  Image,
  Modal,
  ScrollView,
  Animated,
  useWindowDimensions,
  FlatList,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';


import { backgroundColorHandler } from '../../../Components/commonHelper';
import CustomHeader from '../../../Components/CustomHeader';
import MsgConfig from '../../../Config/MsgConfig';



const Feedback = props => {

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundColorHandler(),
        }}>
        <View>
          <CustomHeader
            backPress={() => {
              props.navigation.goBack();
            }}
            screenTitle={MsgConfig.feedBack}
          />
        </View>
        
      </SafeAreaView>
    </>
  );
};

export default Feedback ;
