import React from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {Colors} from '../theme/globalTheme';

interface SimpleInputProps {
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  multiline?: boolean;
  style?: TextStyle;
}

const SimpleInput = ({
  placeholder,
  text,
  setText,
  multiline,
  style,
}: SimpleInputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      multiline={multiline}
      numberOfLines={4}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    minHeight: 65,
    maxHeight: 180,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.black,
  },
});

export default SimpleInput;
