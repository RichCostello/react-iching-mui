import React from 'react';
import * as IchingTable from '../constants/lookup.js';
import { withRouter } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';
import DefaultList from './DefaultList';

class ListPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {hexagrams: IchingTable.getAllHexagrams()};
  }

  details(hex) {
    this.props.history.push( `/details/${hex.number}/${hex.name}` );
    console.log("this is the bar hex");
    
  }



  render() {
    console.log('re-render listPage');
    let hexNodes = this.state.hexagrams;

    return (
      <div className="listpage-container">
      <SimpleMenu />
      <DefaultList />
      </div>
    );
  }
}

export default withRouter(ListPage);



