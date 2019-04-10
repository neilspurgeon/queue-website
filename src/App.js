import React from 'react';
import { Root, Routes } from 'react-static';
import { Link } from '@reach/router';

import './app.css';
import './legal.css';

function App() {
  return (
    <Root>
      <div className="content">
        <Routes />
      </div>
    </Root>
  );
}

export default App;
