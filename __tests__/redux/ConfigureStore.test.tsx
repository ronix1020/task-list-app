import { reduxStore } from "../../src/redux/store";


describe('Redux Store middleware test config', () => {
  it('should allow non-serializable actions when serializableCheck is disabled', () => {
    const actionWithFunction = {
      type: 'test/nonSerializableAction',
      payload: () => {},
    };

    expect(() => {
      reduxStore.dispatch(actionWithFunction);
    }).not.toThrow();
  });
});

