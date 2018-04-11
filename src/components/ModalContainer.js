import React, { Component } from 'react'
import { Modal, Label } from 'semantic-ui-react'
import { Switch, Route, Link, Redirect } from "react-router-dom";


class ModalContainer extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size, dimmer } = this.state
    return (
      <div>
         
         <Modal size={'fullscreen'} dimmer={'blurring'} trigger={<Label as='a' color='orange' ribbon='right'>Search Portal</Label>}>
          <Modal.Header>
            Search for 
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