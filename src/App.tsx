import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

const App: React.FC = () => {
  const handleClick = (e: any) => console.log("clicked")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button label="test" onClick={handleClick} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
