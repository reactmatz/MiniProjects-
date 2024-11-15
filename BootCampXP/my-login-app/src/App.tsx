import React from 'react';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à Minha Aplicação</h1>
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default App;
