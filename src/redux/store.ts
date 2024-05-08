import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {useDispatch} from 'react-redux';
import TaskSlice from './slices/TaskSlice';

const persistTasks = {
  key: 't4$k$L1stApp',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  tasks: persistReducer(persistTasks, TaskSlice),
});

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof reduxStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

let persistor = persistStore(reduxStore);

export {reduxStore, persistor};
