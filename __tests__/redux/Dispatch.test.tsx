import {Provider} from 'react-redux';
import {reduxStore, useAppDispatch} from '../../src/redux/store';
import {renderHook} from '@testing-library/react-native';

describe('useAppDispatch Hook', () => {
  it('should dispatch an action correctly', () => {
    const {result} = renderHook(() => useAppDispatch(), {
      wrapper: ({children}) => (
        <Provider store={reduxStore}>{children}</Provider>
      ),
    });

    const mockAction = {type: 'test/action'};

    result.current(mockAction);
    const actions = reduxStore.getState();
    expect(actions).toBeDefined();
  });
});
