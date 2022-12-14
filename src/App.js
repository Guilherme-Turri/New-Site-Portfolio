import './App.css';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <main className="AppBody">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
