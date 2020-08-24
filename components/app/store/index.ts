import { AppStoreReducers } from 'components/app/store/reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { appStoreSagas } from 'components/app/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(AppStoreReducers(), composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(appStoreSagas);

export default appStore;