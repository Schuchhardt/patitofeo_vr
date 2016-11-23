import { Entity } from 'aframe-react'
import React, { Component } from 'react'

export default class Assets extends Component {
  render () {
    return (
  		<a-assets>

          <img id="cardboard" src="img/cardboard.png" />
          <img id="headphones"  src="img/headphones.png" />
          <img id="rotation" src="img/rotation.png" />

          <img id="intro" src="img/intro.jpg" />  

          <img id="pathEscena1" src="img/pathEscena1.png" />
          <img id="bgEscena1" src="img/bgEscena1.jpg" />
        </a-assets>
    )
  }
}