import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Newsletter</h1>
      </header>
      <main>
        Main Content
      </main>
      <footer>
        <p>&copy; 2021 BLOCKWORKS GROUP</p>
      </footer>
    </div>
  );
}

export default App;
