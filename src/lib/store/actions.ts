/* eslint-disable @typescript-eslint/no-unused-vars */
import Store from "redux-zero/interfaces/Store";

const actions = (store: Store): any => ({
  increment: (state: any) => ({ count: state.count + 1 }),
  decrement: (state: any) => ({ count: state.count - 1 })
});

export default actions;
