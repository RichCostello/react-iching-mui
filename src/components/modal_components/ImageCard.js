import React from 'react'
//import Dialog from 'material-ui/Dialog';
import { Modal, Button } from 'semantic-ui-react'
//import Button from 'material-ui/Button';

class ImageCard extends React.Component {

    state = {
        open: false
      }
    
      handleOpen = () => {
        this.setState({open: true});
      }
    
      handleClose = () => {
        this.setState({open: false});
      }

      close = () => this.setState({ open: false });
    
      render() {
        const actions = [
          <Button
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />
        ]
        return (
          <div className="image-card" style={{backgroundImage: `url(${this.props.url})`}} onClick={this.handleOpen}  closeIcon>
            <Modal
              //trigger={<Button>Show Modal</Button>}
              title={this.props.pic.title}
              //actions={actions}
              size={'small'}
              onClose={this.close}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
              bodyClassName="dialog-body"
            >
              <img className="image" src={this.props.url} alt={this.props.pic.title} />
            </Modal>
            <div className="overlay"><div id="overlay-text">View Image</div></div>
          </div>
        )
      }
}

export default ImageCard