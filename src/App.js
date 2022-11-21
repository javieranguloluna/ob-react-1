import logo from './logo.svg';
import './App.css';
import AComponent from './components/containers/a';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AComponent></AComponent>
      </header>
    </div>
  );
}

export default App;
