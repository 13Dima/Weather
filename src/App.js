import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import WeatherMenu from './components/weatherMenu/WeatherMenu';
import SearchStrip from '../src/components/searchStrip/SearchStrip';
import { PersistGate } from 'redux-persist/integration/react';
import Favorites from './components/favorites/Favorites'

const App = () => {
  return (
    <PersistGate persistor={persistor} >
      <Provider store={store}>
        <div className="app_container">
          <SearchStrip />
          <WeatherMenu />
          <Favorites />
        </div>
      </Provider>
    </PersistGate >
  )
}

export default App;
//123