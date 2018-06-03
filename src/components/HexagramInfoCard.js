import React, { Component } from 'react';
import { HexagramImage } from './HexagramImage.js';

  export default class HexagramInfoCard extends Component {
  
    render() {
      let {trigrams, name, number, description} = this.props.hexagram;
  
      return (
   
          <div className="hexagram-card">
            <HexagramImage below={trigrams.below} above={trigrams.above} />
            <div className="title">
              <h3>{number}: {name}</h3>
              <h2>{description}</h2>
            </div>
        
          </div>
      );
    }
  
    //handleTouchTap = (event) => {
     // let trigram = getTrigramByName( this.props.hexagram.trigrams[event.currentTarget.className].title );
    //};
  }
  