import React from 'react'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from './navigation/AppNavigator';
import { rootReducer } from './redux/reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);


class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default Root