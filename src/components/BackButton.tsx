import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../theme/globalTheme';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const {goBack} = useNavigation();

  return (
    <Icon
      onPress={() => {
        goBack();
      }}
      name="arrow-back"
      size={24}
      color={Colors.primary}
      style={{position: 'absolute', left: 0, top: 0, zIndex: 2 }}
    />
  );
};

export default BackButton;
