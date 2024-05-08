import React from 'react';
import { Text } from 'react-native';

interface SimpleTextProps {
    children: React.ReactNode;
    color?: string;
    size?: number;
}

const SimpleText = ({
    children, 
    color = '#000000', 
    size = 14 
}: SimpleTextProps) => {
    return (
        <Text
            style={{
                color: color,
                fontSize: size
            }}
        >
            {children}
        </Text>
    )
}

export default SimpleText;