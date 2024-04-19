import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Homepage from './pages/Homepage';

const App = () => {

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={ <Homepage /> } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
