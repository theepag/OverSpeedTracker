import './App.css';
import logo from './Images/logo.png';
import OwnerCard from './components/OwnerCard';
import Speed from './components/Speed';

function App() {
  return (
    <div className="App">
      <header>
      <img src={logo} style={{width:100, marginTop:50}} alt="Logo" />
      <div style={{fontSize:35,color: 'darkblue', marginTop:10}}>
        Sri Lanka Police
      </div>
       
      </header>
      <div className="card" style={{marginTop:20}}>
         <OwnerCard></OwnerCard>
      </div>
      <div>
        <p style={{fontSize:25}}>  Over speed locations</p>
      </div>
      <div>
        <Speed></Speed>
      </div>
    </div>
  );
}

export default App;
