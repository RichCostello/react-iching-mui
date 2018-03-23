import React, { Component } from 'react';
import { getTrigramByName } from '../constants/lookup.js';
import { HexagramImage } from './HexagramImage.js';

  
  export default class HexagramInfoCard extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        popover_open: false,
        trigram: this.props.hexagram.trigrams.above,
      };
    }
  
    render() {
      let {trigrams, name, number, description} = this.props.hexagram;
      let innerTrigrams = this.innerTrigrams( this.props.trigrams || false )
  
      return (
   
          <div className="hexagram-card">
            <HexagramImage below={trigrams.below} above={trigrams.above} />
            <div className="title">
              <h3>{number}: {name}</h3>
              <h2>{description}</h2>
            </div>
            {innerTrigrams}
          </div>
      );
    }
  
    innerTrigrams( enabled ) {
      let above = getTrigramByName( this.props.hexagram.trigrams.above.title );
      let below = getTrigramByName( this.props.hexagram.trigrams.below.title );
    }
  
  
    handleTouchTap = (event) => {
      let trigram = getTrigramByName( this.props.hexagram.trigrams[event.currentTarget.className].title );
      this.setState({
        popover_open: true,
        anchorEl: event.currentTarget,
        trigram
      })
    };
  
    handleRequestClose = () => {
      this.setState({
        popover_open: false,
      });
    };
  
  
  }
  