import createStore from "redux-zero";

// import Store from "redux-zero/interfaces/Store";
import actions from "./actions";

const initialState = { count: 1 };
const store = createStore(initialState);

// export default store;

export { store, actions };
