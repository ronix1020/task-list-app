import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserTaskInterface} from '../../interfaces/UserTaskInterfaces';

const initialState: UserTaskInterface = {
  task: [],
};

const TaskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.task.push(action.payload);
    },
  },
});

export const {addTask} = TaskSlice.actions;
export default TaskSlice.reducer;
