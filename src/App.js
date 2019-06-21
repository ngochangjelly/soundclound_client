import React from 'react';
import Stream  from './component/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];
function App() {
  return (
    <div className="App">
      <Stream tracks={tracks}/>
    </div>
  );
}

export default App;
