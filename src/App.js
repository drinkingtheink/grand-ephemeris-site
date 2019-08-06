import React from 'react';
import './App.scss';
import MainStage from './containers/MainStage';
import StarGenerator from './components/StarGenerator';

function App() {
  return (
    <div className="App">
      <MainStage />
      <StarGenerator />
    </div>
  );
}

export default App;
