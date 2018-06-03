import React from 'react'
import { Modal, Label } from 'semantic-ui-react'
//import { getTrigramByName } from '../../constants/lookup.js';
import { HexagramImage } from '../HexagramImage.js';
//import HeadContainer from './HeadContainer.js';
import * as pictureActions from '../../actions/pictures'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImageContainer from './ImageContainer.js';
import * as _ from 'lodash';



class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.labelClick = this.labelClick.bind(this);
  }
  componentDidMount() {
    this.props.getImages()
  }

  state = { 
    open: false,
  }

  show = size => () => this.setState({ size, open: true })
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  
  labelClick = (label, event) => {
    event.preventDefault();
    let query = event.target.innerText;
    const { searchImages } = this.props
    searchImages(query)
  }


  render() {
    
    let {trigrams, name, number, description, tags} = this.props.hexagram;

    let searchtags = _.chain(tags).map( (tag, label, index) => {
      return (
        <div className="labeltags"  key={label} onClickCapture={this.labelClick.bind(null, tag)}>
         <Label 
            className="slabel" 
            as='a' 
            basic size={'large'} 
            value={tag.label}
            key={label}  
            >
            {tag.label}
          </Label>
         </div>
      );
    }).value()
    

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
  
             {searchtags}
            </div>
   
          <div>
         
            <ImageContainer filtered={this.props.filtered} />
          </div>
     
          </Modal.Content>
         
        </Modal>
      </div>
     
    );
  }
 //handleTouchTap = (event) => {
   // let trigram = getTrigramByName( this.props.hexagram.trigrams[event.currentTarget.className].title );
  //};
}

function mapStateToProps(state) {
  return {
    filtered: state.filtered
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pictureActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)