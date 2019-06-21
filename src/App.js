import React from 'react';
import Stream  from './component/Stream/index';
import {Provider} from 'react-redux'
import configureStore from './stores/configureStore';
import * as actions from './actions'
const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];
const store = configureStore()
store.dispatch(actions.setTracks(tracks))
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Stream tracks={tracks}/>
      </Provider>
    </div>
  );
}

export default App;
