import React from 'react';
//Componenets and Pages
import Home from './pages/Home';
import Nav from './components/Nav';
//Style
import GlobalStyles from './components/GlobalStyles';
//Router
import {Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id','/']}>
      <Home />
      </Route>
    </div>
  );
}

export default App;
