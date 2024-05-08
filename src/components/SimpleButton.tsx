import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

interface SimpleButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    color?: string;
    style?: ViewStyle;
}

const SimpleButton = ({
    children,
    onPress,
    color = '#5b5b5b',
    style
}: SimpleButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                width: '100%',
                height: 65,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: color,
                borderRadius: 16,
                ...style,
            }}
        >
            {children}
        </TouchableOpacity>
    )
}

export default SimpleButton;