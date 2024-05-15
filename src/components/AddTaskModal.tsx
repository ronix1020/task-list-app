import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from '../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleText from './SimpleText';
import SimpleInput from './SimpleInput';
import SimpleButton from './SimpleButton';
import {addTask} from '../redux/slices/TaskSlice';

interface AddTaskModalProps {
  visible: boolean;
  show: (show: boolean) => void;
}

const AddTaskModal = ({visible, show}: AddTaskModalProps) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>('');

  const onAddTask = () => {
    if (task.length > 0) {
      dispatch(addTask(task));
      onClose();
    } else {
      Alert.alert('Error', 'Task cannot be empty');
    }
  };

  const onClose = () => {
    setTask('');
    show(false);
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Icon
            name="close"
            color={Colors.primary}
            size={32}
            onPress={onClose}
            style={styles.closeIcon}
          />
          <SimpleText size={20} style={styles.title}>
            Add new task
          </SimpleText>
          <SimpleInput
            testId={'TaskInput'}
            placeholder={'Task...'}
            text={task}
            setText={setTask}
            multiline
            style={styles.input}
          />
          <SimpleButton
            testId="SaveTaskButton"
            color={Colors.primary}
            onPress={onAddTask}>
            <SimpleText size={18}>Add</SimpleText>
          </SimpleButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 6,
    top: 16,
    width: 40,
    height: 40,
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 20,
  },
});

export default AddTaskModal;
