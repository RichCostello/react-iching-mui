import React from 'react'
import { Label } from 'semantic-ui-react'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import { HexagramImage } from '../HexagramImage.js';
import * as pictureActions from '../../actions/pictures'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

let { tags} = this.props.hexagram;
let SearchTags = (tags).map( (tag, label, id, index) => {
    
    return this.isActive(tag.id) ? (
      <div className="labeltags" key={label} >
       <Label 
          onClick={this.labelClick.bind(null, tag)} 
          className='slabel--active'
          as='a' 
          basic size={'large'} 
          value={tag.id}
          key={label} 
          isActive={this.isActive(tag.id)}
          onActiveTab={ this.setActiveTab.bind(null, tag.id)}
          >
          {tag.label}
        </Label>
       </div>
    ) : (
      <div className="labeltags" key={label} >
       <Label 
          onClick={this.labelClick.bind(null, tag)} 
          className='slabel'
          as='a' 
          basic size={'large'} 
          value={tag.id}
          key={label} 
          isActive={this.isActive(tag.id)}
          onActiveTab={ this.setActiveTab.bind(null, tag.id)}
          >
          {tag.label}
        </Label>
       </div>
       
    );
  })

export default SearchTags;