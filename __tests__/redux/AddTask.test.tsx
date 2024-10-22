import { UserTaskInterface } from '../../src/interfaces/UserTaskInterfaces';
import TaskSlice, { addTask } from '../../src/redux/slices/TaskSlice'; // Asegúrate de ajustar la ruta

describe('Add task correctly with Redux', () => {
  const initialState: UserTaskInterface = {
    task: [],
  };

  it('should handle the initial state', () => {
    expect(TaskSlice(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addTask action', () => {
    const taskDescription = 'New Task';
    const actualState = TaskSlice(initialState, addTask(taskDescription));
    
    expect(actualState.task.length).toBe(1);
    expect(actualState.task[0]).toBe(taskDescription);
  });
});
