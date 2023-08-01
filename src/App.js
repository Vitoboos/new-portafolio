import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (

    <Fragment>

      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/projects' element={<Projects/>}> </Route>
      </Routes>


    </Fragment>


  )}




export default App;
