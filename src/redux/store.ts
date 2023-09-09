import {combineReducers, configureStore} from '@reduxjs/toolkit';
import inspectorReducer from './reducers/inspectorSlice';
import consumerReducer from './reducers/consumerSlice';

const rootReducer = combineReducers({
  inspector: inspectorReducer,
  consumer: consumerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
