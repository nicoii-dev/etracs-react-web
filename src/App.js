import React from "react";
import store from './redux/store';
import { Provider} from 'react-redux';

import MainRoute from './routes';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
      <Provider store = {store}>
        <MainRoute />
      </Provider>
  )
}

export default App;
