import React from 'react';
import Home from './view/Home';

// import { Container } from './styles';

const App: React.FC = () => {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log('DEU CERTO!!!'))
    .catch(() => console.log('DEU RUIM...'))
  return <Home />;
}

export default App;