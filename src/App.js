
import { useEffect } from 'react';
import './App.css';
import Backtotop from './components/Backtotop';
import Besttravellers from './components/Besttravellers';
import Footersection from './components/Footersection';
import Formsection from './components/Formsection';
import Letsfly from './components/Letsfly';
import Makememories from './components/Makememories';
import Navsection from './components/Navsection';
import Ourfeatures from './components/Ourfeatures';
import Populartickets from './components/Populartickets';
import Slidersection from './components/Slidersection';
import Tabsection from './components/Tabsection';
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from './components/Loader';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <Preloader />
      <div className='bg-[url(../src/assets/images/png/bgimage.png)] bg-cover bg-center bg-no-repeat md:min-h-[90vh] min-h-[70vh]'>
        <Navsection />
      </div>
      <Tabsection />
      <Ourfeatures />
      <Letsfly />
      <Populartickets />
      <Besttravellers />
      <Slidersection />
      <Makememories />
      <Formsection />
      <div className='bg-[url(../src/assets/images/png/footerbg.png)] bg-cover bg-center bg-no-repeat'>
        <Footersection />
      </div>
      <Backtotop />
    </div>
  );
}

export default App;
