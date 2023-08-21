import { combineReducers, configureStore } from '@reduxjs/toolkit'
import inspectorReducer from './reducers/inspectorSlice'

const rootReducer = combineReducers({
  inspector: inspectorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;