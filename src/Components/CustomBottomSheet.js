import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import {View, Text} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {useSelector} from 'react-redux';

const CustomBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);
  const {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  const {modalHeight = 300, onOpen, onClose, children, ...rest} = props;

  const [contentHeight, setContentHeight] = useState(300);
  useEffect(() => {
    setContentHeight(modalHeight);
  }, [modalHeight]);

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.open();
      if (props.onOpen) {
        props.onOpen();
      }
    },
    close: () => {
      bottomSheetRef.current?.close();
      if (props.onClose) {
        props.onClose();
      }
    },
  }));

  useEffect(() => {
    // Reset the bottom sheet state on mount and unmount
    return () => {
      bottomSheetRef.current?.close();
    };
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      height={contentHeight}
      draggable={true}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: currentBgColor,
        },
      }}>
      <View
        // onLayout={event => {
        //   console.log('Layout_event', event);
        //   const {height} = event.nativeEvent.layout;
        //   setContentHeight(height);
        // }}
        style={{
          flex: 1,
          backgroundColor: currentBgColor,
          paddingHorizontal: '5%',
        }}>
        {props.children}
      </View>
    </BottomSheet>
  );
});

export default CustomBottomSheet;
