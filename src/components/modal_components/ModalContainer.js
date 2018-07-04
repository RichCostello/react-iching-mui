import React from 'react'
import { Modal, Label } from 'semantic-ui-react'
//import { getTrigramByName } from '../../constants/lookup.js';
import { HexagramImage } from '../HexagramImage.js';
import * as pictureActions from '../../actions/pictures'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImageContainer from './ImageContainer.js';
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import {NavLink, withRouter} from 'react-router-dom';


class ModalContainer extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      selectedTabId: 1,
    }
    
  }  
  componentDidMount() {
    
    let pics = this.props.hexagram.tags[0].label 
    this.props.getImages(pics)
  }


  show = size => () => this.setState({ size, open: true })
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false });
  
  
  labelClick = (label, event, selectedTabId, id) => {
    event.preventDefault();
    let query = event.target.innerText;    
    const { searchImages } = this.props
    searchImages(query);
    this.setState({ selectedTabId : label.id });
  }
  render() {
    let {trigrams, name, number, description, tags, selectedTabId} = this.props.hexagram;
      let searchtags = (tags).map( (tag, label, id, index) => {
        let initActive = (match, location) => {
          if (!match) {
            return false
          }
          let selectedTabId = parseInt(match.selectedTabId)
          return this.state.selectedTabId === tag.id;
        }
    
        const params = new URLSearchParams(this.props)
        return (
          <div className="labeltags" key={label} >
          <Label 
              onClickCapture={this.labelClick.bind(null, tag)} 
              as={NavLink}
              to="/"
              activeClassName="slabel--active"
              basic size={'large'} 
              value={tag.id}
              key={label} 
              isActive={initActive}
              >
              {tag.label}
            </Label>
          </div>   
        );
      })
      
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
}

function mapStateToProps(state) {
  return {
    filtered: state.filtered
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pictureActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalContainer))