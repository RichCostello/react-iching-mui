import React, { Component } from 'react'
import { Modal, Label, Icon } from 'semantic-ui-react'



class ModalContainer extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    console.log('rich modal');
    console.log(this.props);
    let {trigrams, name, number, description} = this.props.hexagram;
    const { open, size, dimmer } = this.state
    return (
      <div>
         
         <Modal size={'fullscreen'} dimmer={'blurring'} trigger={<Label as='a' color='orange' ribbon='right'>Search Portal</Label>} closeIcon>
          <Modal.Header>
            Search for 
            <h3>{number}: {name}</h3>
          </Modal.Header>
          <Modal.Content>
            <p>Click on search terms for</p>
            
          </Modal.Content>
          <Modal.Actions>
            
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalContainer