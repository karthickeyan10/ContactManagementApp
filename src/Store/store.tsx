import { createStore, combineReducers } from 'redux';
import contactReducer from '../reducers/contactReducer.tsx';

// Assuming you have a rootReducer combining multiple reducers
const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add more reducers if needed
});

// Create store with rootReducer
const store = createStore(rootReducer);

export default store;
