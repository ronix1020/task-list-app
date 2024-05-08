import React from 'react';
import { View } from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleText from '../../components/SimpleText';
import SimpleButton from '../../components/SimpleButton';
import { Colors } from '../../theme/globalTheme';
import HomeStyles from './styles/HomeStyles';

const HomeScreen = () => {
    return (
        <MainLayout>
            <View
                style={ HomeStyles.container }
            >
                <SimpleButton
                    color={Colors.primary}
                    onPress={() => console.log('Go to Detail')}
                    style={HomeStyles.button}
                >
                    <Icon name='add' size={20} color={Colors.black} />
                    <SimpleText size={20} color={Colors.black}>
                        Task
                    </SimpleText>
                </SimpleButton>
                <SimpleButton
                    color={Colors.primary}
                    onPress={() => console.log('Go to Detail')}
                    style={HomeStyles.button}
                >
                    <Icon name='list' size={20} color={Colors.black} />
                    <SimpleText size={20} color={Colors.black}>
                        List
                    </SimpleText>
                </SimpleButton>
            </View>
        </MainLayout>
    )
}

export default HomeScreen;