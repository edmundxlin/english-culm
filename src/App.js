import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <img src={require('./squiggly.png')} width="120vw" height="80vh" alt="squig" id="squig1" />
      <img src={require('./squiggly1..png')} width="120vw" height="80vh" alt="squig" id="squig2" />
      <div id="Frankenstein">
        <h2>Frankenstein</h2>
        <p id="fText">Frankenstein chooses to destroy his creation instead of helping it better itself.</p>
      </div>
      <img src={require('./shot.png')} width="120vw" height="80vh" alt="gun" id="shot" />
      <img src={require('./download.png')} width="100vw" height="100vh" alt="cuffs" id="fists" />
      
      <div id="Jupiter">
        <h2>Jupiter</h2>
        <p id="juptext">Due to the sacrilegeous nature of the human beings, the gods order a flood to wipe the earth clean apart from a couple.</p>
        
      </div>
      <img src={require('./tsunami.png')} width="100vw" height="100vh" alt="flood" id="tsunami" />
      <img src={require('./lightning.png')} width="100vw" height="100vh" alt="ln" id="lightning" />
      <div id="Government">
        <h2>Government</h2>
        <p id="govtext">Governments enforce the law on the citizens, yet when NA countries are inclined to  punish instead of rehabilitate, </p>
      </div>
      <img src={require('./images.png')} width="100vw" height="100vh" alt="cuffs" id="cuffs" />
      <img src={require('./gun.png')} width="100vw" height="80vh" alt="gun" id="gun" />

      <div id="Monster">
        <h2>Monster</h2>
        <div id="MonsterText">
        <p>Frankenstein and the Monster's relationship is recursive in its nature. The more either seems to seek the destruction of the other, the farther away they seem.</p>
        </div>
      </div>
        <div id="People">
          <h2>Humans</h2>
          <p id="jupHum">And the humans continued their sacrilegeous ways, despite the punishment from the Gods. The punishment from the Gods was essentially pointless.</p>
          <p id="AuthHum">The recidivism of criminals can be correlated to the harsh negligence from government officials.</p>
        </div>

    </div>
  );
}

export default App;
