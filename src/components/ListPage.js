import React from 'react';
import * as IchingTable from '../constants/lookup.js';
import { withRouter } from 'react-router-dom';
import DefaultList from './DefaultList';
import ReverseList from './ReverseList';
import RandomList from './RandomList';

class ListPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hexagrams: IchingTable.getAllHexagrams(),
      showRev: false
    };
    //this.handleClose = this.handleClose.bind(this);
    //this.handleReverse = this.handleReverse.bind(this);
    //this.handleRandom = this.handleRandom.bind(this);
  }

  details(hex) {
    this.props.history.push( `/details/${hex.number}/${hex.name}` );
    console.log("this is the bar hex");
    
  }

  toggleMeAgain = () => {
    const doesToggleAgain = this.state.showRev;
    this.setState({
      showRev: !doesToggleAgain
    });
  };



  render() {
    console.log('re-render listPage');
    let hexNodes = this.state.hexagrams;
    
    let defaultList = <DefaultList />;
    if (this.state.showRev) {
      defaultList = <ReverseList />;
    }

    return (
      <div className="listpage-container">
      <button onClick={this.toggleMeAgain}>Reverse List</button>
      {defaultList}
      </div>
    );
  }
}

export default withRouter(ListPage);



