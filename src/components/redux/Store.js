import { legacy_createStore as createStore } from "redux";
import cartReducer from './cartReducer'

const store = createStore(cartReducer);

export default store;