import { combineReducers } from 'redux';
import weatherReducer from './weather/weatherReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createFilter from 'redux-persist-transform-filter';

const filter = createFilter('weather', ['favorites']);

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['weather'],
    transforms: [filter]
}

const rootReducer = combineReducers({
    weather: weatherReducer
})

export default persistReducer(persistConfig, rootReducer);