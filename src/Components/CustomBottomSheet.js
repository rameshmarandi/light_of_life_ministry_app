import React, {useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { getResHeight, getResWidth } from '../utility/responsive';
import theme from '../utility/theme';

const CustomBottomSheet = ({
  sheetRef,
  snapPoints = ['25%', '50%', '75%'],
  initialSnapIndex = 999,
  renderContent,
  headerTitle = 'Title',
  onClose,
}) => {
  // Close the bottom sheet
  const handleClose = useCallback(() => {
    if (sheetRef && sheetRef.current) {
      sheetRef.current.close();
      if (onClose) {
        onClose();
      }
    }
  }, [sheetRef, onClose]);

  // Render the header
  const renderHeader = useMemo(
    () => (
      <View style={styles.header}>
        <View
        style={{
            height: getResHeight(0.5),
            width: getResWidth(20),
            backgroundColor: theme.color.dimGray,
            position: "absolute",
            left :getResWidth(40),
            borderBottomRightRadius : getResHeight(40),
            borderBottomLeftRadius : getResHeight(40),
        }}/>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    ),
    [headerTitle, handleClose],
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={initialSnapIndex}
      snapPoints={snapPoints}
      handleComponent={() => renderHeader}>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default CustomBottomSheet;
