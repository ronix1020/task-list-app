import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/globalTheme';
import SimpleText from './SimpleText';

interface TaskItemProps {
  description: string;
}

const TaskItem = ({description}: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <SimpleText size={18}>{description}</SimpleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 10,
    borderRadius: 16,
    gap: 10,
  },
});

export default TaskItem;
