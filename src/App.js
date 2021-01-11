import logo from './logo.svg';
import './App.css';

function App() {  //Componente funcional
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {this.props.name}
        </p>
      </header>
    </div>
  );
}

export default App;
