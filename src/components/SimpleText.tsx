import React from 'react';
import {Text, TextStyle} from 'react-native';

interface SimpleTextProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  style?: TextStyle;
}

const SimpleText = ({
  children,
  color = '#000000',
  size = 14,
  style,
}: SimpleTextProps) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: size,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default SimpleText;
