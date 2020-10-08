import React from 'react';
import { useRoutes } from './routes';
import { Nav } from './components/Nav';
import './App.scss';
import { BackgroundAnimation } from './components/BackgroundAnimation';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Nav />
      <div className="App-Container">{routes}</div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
