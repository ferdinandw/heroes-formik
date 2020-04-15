import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form'
import './App.css'
import Data from './component/Display/index'

function App() {
  return (
    <div className="App">
      <Form/>
      <Data/>
    </div>
  );
}

export default App;
