import React from 'react';
import { useRoutes } from './routes';
import { Nav } from './components/Nav';
import './App.scss';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Nav />
      <div className="App-Container">{routes}</div>
    </div>
  );
}

export default App;
