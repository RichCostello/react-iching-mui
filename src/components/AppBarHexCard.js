import React, { Component } from 'react';
import { getTrigramByName } from '../constants/lookup.js';
import { HexagramImage } from './HexagramImage.js';
import $ from 'jquery';

  
  export default class AppBarHexCard extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        trigram: this.props.hexagram.trigrams.above
 
      }
    }

    componentDidMount() {
      $('.appbar-card').hide();
      $('List').click(function(){
       alert("test");
      });
      $('.PermanentDrawer-content-7, .jss7').scroll(function(){
         if($('.PermanentDrawer-content-7, .jss7').scrollTop() >= 95) {
           $('.appbar-card').show();
         } else {
           $('.appbar-card').hide();
         }
      });
     }
   
     componentWillUnmount(){
       $('.appbar-card').hide();
     }
    
    render() {
      let {trigrams, name, number, description} = this.props.hexagram;
      let innerTrigrams = this.innerTrigrams( this.props.trigrams || false )
  
      return (
   
          <div className="appbar-card">
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
  