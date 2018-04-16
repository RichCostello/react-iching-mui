import React, { Component } from 'react'
import { Modal, Label, Icon } from 'semantic-ui-react'
import { getTrigramByName } from '../constants/lookup.js';
import { HexagramImage } from './HexagramImage.js';


class ModalContainer extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
  
    let {trigrams, name, number, description} = this.props.hexagram;
    const { open, size, dimmer } = this.state
    return (
      <div>
         
         <Modal size={'fullscreen'} dimmer={'blurring'} trigger={<Label as='a' color='orange' ribbon='right'>Search Portal</Label>} closeIcon>
          <Modal.Header>
          
          <div className="hexagram-card">
            <HexagramImage below={trigrams.below} above={trigrams.above} />
            <div className="title">
              <h3>{number}: {name}</h3>
              <h2>{description}</h2>
            </div>
        
          </div>
          </Modal.Header>
          <Modal.Content> 
            <div>
            <p>Click on search terms for </p><h4>{name} - {description} </h4>
            </div>
          </Modal.Content>
          <Modal.Actions>
            
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
  handleTouchTap = (event) => {
    let trigram = getTrigramByName( this.props.hexagram.trigrams[event.currentTarget.className].title );
  };
}

export default ModalContainer