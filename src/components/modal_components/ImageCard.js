import React from 'react'
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


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
    
      render() {
        const actions = [
          <Button
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />
        ]
        return (
          <div className="image-card" style={{backgroundImage: `url(${this.props.url})`}} onClick={this.handleOpen}>
            <Dialog
              title={this.props.pic.title}
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
              bodyClassName="dialog-body"
            >
              <img className="image" src={this.props.url} alt={this.props.pic.title} />
            </Dialog>
            <div className="overlay"><div id="overlay-text">View Image</div></div>
          </div>
        )
      }
}

export default ImageCard