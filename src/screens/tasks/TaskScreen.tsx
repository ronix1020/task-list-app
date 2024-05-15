import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import SimpleText from '../../components/SimpleText';
import SimpleButton from '../../components/SimpleButton';
import TaskItem from '../../components/TaskItem';
import AddTaskModal from '../../components/AddTaskModal';
import {StoreInterface} from '../../interfaces/StoreInterface';
import TaskStyles from './styles/TaskStyles';
import {Colors} from '../../theme/globalTheme';
import BackButton from '../../components/BackButton';

const TaskScreen = () => {
  const tasks = useSelector((state: StoreInterface) => state.tasks.task);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <MainLayout styles={TaskStyles.container}>
      <View style={TaskStyles.backButton}>
        <BackButton />
      </View>
      <SimpleButton
        testId="AddTaskButton"
        color={Colors.primary}
        onPress={() => setShowModal(true)}
        style={TaskStyles.button}>
        <SimpleText testId="newTaskText" size={20}>
          New task
        </SimpleText>
      </SimpleButton>
      <FlatList
        data={tasks}
        ItemSeparatorComponent={() => <View style={TaskStyles.divider} />}
        renderItem={({index, item}) => (
          <TaskItem key={index} description={item} />
        )}
      />
      <AddTaskModal visible={showModal} show={setShowModal} />
    </MainLayout>
  );
};

export default TaskScreen;
