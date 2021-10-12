import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar/NavBar';
import Newsletter from './components/Pages/Newsletter/Newsletter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
