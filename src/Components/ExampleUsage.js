// ExampleUsage.js
import React, {useRef, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import MasterTextInput from './MasterTextInput';

const ExampleUsage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    birthDate: useRef(null),
  };

  const handleSubmit = () => {
    console.log('Submit Pressed');
  };

  return (
    <View style={styles.container}>
      <MasterTextInput
        label="Name"
        placeholder="Enter your name"
        ref={inputRefs.name}
        onSubmitEditing={() => inputRefs.email.current.focus()}
      />
      <MasterTextInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="numeric"
        secureTextEntry
        ref={inputRefs.email}
        onSubmitEditing={() => inputRefs.birthDate.current.focus()}
      />
      <MasterTextInput
        label="Birth Date"
        placeholder="Select your birth date"
        isDate={true}
        ref={inputRefs.birthDate}
        value={selectedDate}
        onChangeText={date => {
          setSelectedDate(date);
        }}
        onSubmitEditing={handleSubmit}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // flex: 1,
  },
});

export default ExampleUsage;
