import {createStore} from "react-redux";
import reducer from './guestList';

let store = createStore(reducer)
export default store;