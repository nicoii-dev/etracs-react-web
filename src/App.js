import React from "react";
import store from './redux/store';
import { Provider} from 'react-redux';

import MainRoute from './routes';

function App() {
  return (
      <Provider store = {store}>
        <MainRoute />
      </Provider>
  )
}

export default App;
