import * as React from 'react';
import { HashRouter } from "react-router-dom";
import PageRoutes from './router';
import Header from 'components/header';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <PageRoutes />
      </HashRouter>
    </div>
  )
}

export default App
