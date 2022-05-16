import {ThunkAction, Action, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {combineReducers, Dispatch, Reducer, ReducersMapObject} from "redux";
import {StartWizardReducerStore} from "../components/StartWizard/redux/startWizard.reducer";

type StoreWithAsyncReducersAndInject =
  EnhancedStore
  & { asyncReducers: ReducersMapObject, injectReducer: (k: string, ar: Reducer) => void }
  & (StartWizardReducerStore | undefined);

// Define the Reducers that will always be present in the application
const staticReducers = {};

// Configure the store
function createStore() {
  const store = configureStore({
    reducer: staticReducers,
  }) as StoreWithAsyncReducersAndInject;

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return store
}

export default createStore();

function createReducer(asyncReducers: ReducersMapObject) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

export type AppDispatch = Dispatch;
export type RootState = ReturnType<typeof createStore>; // .getState
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;