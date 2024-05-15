import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleText from '../../components/SimpleText';
import SimpleButton from '../../components/SimpleButton';
import {Colors} from '../../theme/globalTheme';
import HomeStyles from './styles/HomeStyles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();

  return (
    <MainLayout styles={HomeStyles.container}>
      <SimpleButton
        testId='TaskButton'
        color={Colors.primary}
        onPress={() => navigate('Tasks')}
        style={HomeStyles.button}>
        <Icon name="add" size={20} color={Colors.black} />
        <SimpleText size={20} color={Colors.black}>
          Task
        </SimpleText>
      </SimpleButton>
      <SimpleButton
        testId='ListButton'
        color={Colors.primary}
        onPress={() => navigate('List')}
        style={HomeStyles.button}>
        <Icon name="list" size={20} color={Colors.black} />
        <SimpleText size={20} color={Colors.black}>
          List
        </SimpleText>
      </SimpleButton>
    </MainLayout>
  );
};

export default HomeScreen;
