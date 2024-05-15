import {Provider} from 'react-redux';
import {render, screen, waitFor} from '@testing-library/react-native';
import {reduxStore} from '../../src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import ListScreen from '../../src/screens/list/ListScreen';

test('Load the list screen', async () => {
  render(
    <Provider store={reduxStore}>
      <NavigationContainer>
        <ListScreen />
      </NavigationContainer>
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByTestId('ListFlatList')).toBeOnTheScreen();
  });
});
