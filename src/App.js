import './App.css';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
