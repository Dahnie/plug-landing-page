import './assets/styles/carousel.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
