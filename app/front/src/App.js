import './App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { extend } from 'react-three-fiber';
import Background from './components/backgroud';
import ConfigForm from './components/configForm';
extend({OrbitControls})



function App() {
  return (
    <div className="app-container">
      <Background />
      <div className="content-container">
        <ConfigForm/>
       

      </div>
  </div>
    
  );
}

export default App;
