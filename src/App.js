import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <div id="Frankenstein">
        <h2>Frankenstein</h2>
        <p id="fText">Frankenstein...</p>
      </div>
      
      <div id="Jupiter">
        <h2>Jupiter</h2>
        
      </div>
      <img src={require('./tsunami.png')} width="100vw" height="100vh" alt="flood" id="tsunami" />
      <div id="Government">
        <h2>Government</h2>
        
      </div>
      <img src={require('./images.png')} width="100vw" height="100vh" alt="cuffs" id="cuffs" />

      <div id="Monster">
        <h2>Monster</h2>
        <div id="MonsterText">
        <p>Frankenstein and the Monster's relationship is recursive in its nature. The more either seems to seek the destruction of the other, the farther away they seem.</p>
        </div>
      </div>
        <div id="People">
          <h2>Humans</h2>
          <p id="jupHum">Humans... test</p>
          <p id="AuthHum">Authority...</p>
        </div>

    </div>
  );
}

export default App;
