import React from 'react';
import './App.css';
import Felix from './felix.js' ;
import Mediacard from './MediaCard.js';
import Gate from './gate.js'

function App() 
{ 
  return (
      <div align = "center"> 
          <h3 >Hello Everyone !!! ABDUL SAMAD here !!!!  </h3>
          <strong>Creating the first React web-page</strong><br/><br/>
                This is a plain function ! <br/><br/>
                <Felix time = "3:19am" date = "15/06/2020" ></Felix><br/>
                <strong>Trying out JS code is JSX here:</strong> <br/>
                There are {12*30} days in a year !
                <Mediacard title = "MY CAT INFO" body = "NAME IS FELIX, MEANING LUCKY" ></Mediacard>
                <Gate isOpen = {false}></Gate>


      </div>
  );
}

export default App;
