import React, {useEffect} from 'react';
import MainLayout from '../../layouts/MainLayout';
import SimpleText from '../../components/SimpleText';
import {getData} from '../../services/api';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {Colors} from '../../theme/globalTheme';
import {ApiRequestInterface} from '../../interfaces/ApiInterface';
import BackButton from '../../components/BackButton';
import ListStyles from './styles/ListStyles';
import ListItem from '../../components/ListItem';

const ListScreen = () => {
  const [elements, setElements] = React.useState<ApiRequestInterface[]>([]);

  useEffect(() => {
    getElements();
  }, []);

  const getElements = async () => {
    const dat = await getData();
    setElements(dat);
  };

  return (
    <MainLayout styles={ListStyles.container}>
      <BackButton />
      <SimpleText testId="ListTitle" size={24} style={ListStyles.title}>
        Lists
      </SimpleText>
      {elements.length <= 0 ? (
        <ActivityIndicator color={Colors.primary} size={'large'} />
      ) : (
        <FlatList
          testID="ListFlatList"
          data={elements}
          ItemSeparatorComponent={() => <View style={ListStyles.divisor} />}
          renderItem={({item}) => <ListItem testID="ListCardItem" {...item} />}
          keyExtractor={item => item.id}
        />
      )}
    </MainLayout>
  );
};

export default ListScreen;
