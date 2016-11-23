import {Entity} from 'aframe-react';
import React, { Component } from 'react'

export default class Sound extends Component {
	render () {
    return (
  		<Entity
   		sound={"src:" + this.props.src + "; autoplay: true; volume: 1; loop:true;"}/>
   	)}
};
