import React from 'react'
//import Dialog from 'material-ui/Dialog';
import { Modal, Button } from 'semantic-ui-react'
import ContentLoader from 'react-content-loader'
//import { CSSTransition } from "react-transition-group";
import MyBulletListLoader from './BulletList'


class ImageCard extends React.Component {
      constructor(props) {
        super(props)
        this.state = { 
          loading: true,
          open: false,
          imageStatus: "loading" 
        }
      }

      componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2500); // simulates an async action, and hides the spinner
      }

      handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
      }
    
      handleOpen = () => {
        this.setState({open: true});
      }
    
      handleClose = () => {
        this.setState({open: false, });
      }

      close = () => this.setState({ open: false });
      render() {
        const { loaded } = this.state;
        const actions = [
          <Button
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />
        ]

        const { loading } = this.state;
        return (
          <div>
         {loading ? (
           <div className="image-card">
          <MyBulletListLoader />
          
           </div>
         ):(
          <div className="image-card" style={{backgroundImage: `url(${this.props.url})`}} onClick={this.handleOpen}>
           
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
              <img className="image" src={this.props.url} alt={this.props.pic.title} onLoad={this.handleImageLoaded.bind(this)} />
              
            </Modal>
            <div className="overlay"><div id="overlay-text">View Image</div></div>
           
          </div>
        )}
        
          </div>
        )
      }
}

export default ImageCard