import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {getData} from '../../src/services/api';
import ListScreen from '../../src/screens/list/ListScreen';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
  };
});

jest.mock('../../src/services/api', () => ({
  getData: jest.fn(),
}));

jest.mock('../../src/components/ListItem', () => 'MockedListItem');
jest.mock('../../src/components/BackButton', () => 'MockedBackButton');

test('renders list after data fetching', async () => {
  (getData as jest.Mock).mockResolvedValue([
    {id: '1', name: 'user1'},
    {id: '2', name: 'user2'},
  ]);

  const {getByTestId, getAllByTestId} = render(<ListScreen />);

  await waitFor(() => {
    expect(getByTestId('ListFlatList')).toBeTruthy();
    const items = getAllByTestId('ListCardItem');
    expect(items.length).toBe(2);
  });
});
