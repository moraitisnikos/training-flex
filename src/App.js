import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';

function App() {
  return (
    <div>
      <Mainpage/>
    </div>
  );
}

export default App;
