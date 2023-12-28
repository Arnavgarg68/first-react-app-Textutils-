// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name="Arnav Garg";
function App() {
  return (
    <>
      <Navbar title="Arnav Garg" />
      <div className="container">
        <TextForm heading="Enter your analysed text"/>
      </div>
    </>
  );
}

export default App;
