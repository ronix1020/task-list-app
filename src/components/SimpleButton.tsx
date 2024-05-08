import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

interface SimpleButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  color?: string;
  style?: ViewStyle;
}

const SimpleButton = ({
  children,
  onPress,
  color = '#5b5b5b',
  style,
}: SimpleButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 16,
  },
});

export default SimpleButton;
