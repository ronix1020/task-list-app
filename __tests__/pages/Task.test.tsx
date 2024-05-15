import {Provider} from 'react-redux';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TaskScreen from '../../src/screens/tasks/TaskScreen';
import {reduxStore} from '../../src/redux/store';
import {NavigationContainer} from '@react-navigation/native';

test('Add a new task', async () => {
  render(
    <Provider store={reduxStore}>
      <NavigationContainer>
        <TaskScreen />
      </NavigationContainer>
    </Provider>,
  );

  fireEvent.press(screen.getByTestId('AddTaskButton'));

  const newTaskText = 'New Task for testing';

  fireEvent.changeText(screen.getByTestId('TaskInput'), newTaskText);

  fireEvent.press(screen.getByTestId('SaveTaskButton'));

  expect(screen.getByText(newTaskText)).toBeOnTheScreen();
});
