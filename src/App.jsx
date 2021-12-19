import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import PageRoutes from './router';
import Header from 'components/header';

import 'style/base.less';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename="notes">
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
