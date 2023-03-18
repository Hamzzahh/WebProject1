import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return ( //jsx
    <>
    <Navbar title="Web App" keyword="disabled"/>
    <div className="container my-3">
    {/* <TextForm text = "My Text App"/> */}
    </div>
    <About/>
    </>
  );
}

export default App;
