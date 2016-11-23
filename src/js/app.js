import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Assets from './components/Assets';
import Sound from './components/Sound';


// <Sound src="audio/tango.mp3"></Sound>

class VRScene extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene>

        <Assets></Assets>

        <a-sky color="#000"></a-sky>
        
        <a-entity sound="src: audio/tango.mp3; autoplay: true; volume: 1; loop:true;"></a-entity>

        <Entity position='0 2.2 4'>
          <Camera>
            <a-image id="path" position="-1 0 -2" rotation="0 0 0" width=".12" height=".8" src="" scale="0 0 0"></a-image>
            <a-cursor id="cursor" opacity="0" color="#2E3A87" />
            <a-entity id="audio" position="0 0 0"></a-entity>

            <a-image src="#headphones" opacity="0" position="0 0 -6">
              <a-animation attribute="opacity" from="0" to="1" begin="0" dur="5000">
              </a-animation>
              <a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000">
              </a-animation>
              <a-animation attribute="visible" begin="10000" to="false"></a-animation>
              <a-animation attribute="rotation" dur="5000" fill="forwards" to="0 360 0" repeat="2"></a-animation>
            </a-image>
          </Camera>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
