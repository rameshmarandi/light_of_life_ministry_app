import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {getResHeight} from '../utility/responsive';

const WaveButton = props => {
  const scale = useSharedValue(1);

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.5, {
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: 1 - (scale.value - 1),
    };
  });

  // Debugging getResHeight values
  console.log('Circle size:', getResHeight(7));
  console.log('Button size:', getResHeight(6));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]} />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Icon name="plus" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    position: 'absolute',
    width: getResHeight(7),
    height: getResHeight(7),
    borderRadius: getResHeight(7) / 2, // Ensure correct border radius for circle
    backgroundColor: 'rgba(0, 150, 255, 0.5)',
  },
  button: {
    width: getResHeight(6),
    height: getResHeight(6),
    borderRadius: getResHeight(6) / 2, // Ensure correct border radius for button
    backgroundColor: '#0096FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WaveButton;
