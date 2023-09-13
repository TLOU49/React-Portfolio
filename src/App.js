import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './utils/Header';

function App() {

  return (
    <div className="w-screen relative" >
      <div className='fixed top-0 left-0 right-0 '>
     <Header/>
      </div>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
