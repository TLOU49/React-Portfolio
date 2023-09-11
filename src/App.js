import './App.css';
import Home from './components/Home';
import Header from './utils/Header';

function App() {
  return (
    <div className="relative">
      <div className='fixed top-0 left-0 right-0 '>
     <Header/>
      </div>
     <Home/>
    </div>
  );
}

export default App;
