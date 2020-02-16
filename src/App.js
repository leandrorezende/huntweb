import React from 'react';
import Routes from './routes';
import Header from './components/Header/index';
import './styles.css';

const App = () => {
  return (<div className="App">
    <Header />
    <Routes />
  </div>);
}

export default App;