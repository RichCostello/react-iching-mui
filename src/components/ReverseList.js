import React from 'react';
import { List, ListItem, Avatar} from 'material-ui';
import * as IchingTable from '../constants/lookup.js';
import { HexagramImage } from './HexagramImage';
import { withRouter } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'

class DefaultList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {hexagrams: IchingTable.getAllHexagrams()};
      }
    
      details(hex) {
        this.props.history.push( `/details/${hex.number}/${hex.name}` );
        console.log("this is the bar hex");
        
      }

    render() {
        let hexNodes = this.state.hexagrams;
        return (
            <div>
                <List>
                <h4 className="ListSub">The King Wen sequence</h4>
                <Divider />
                    {
                     hexNodes.slice(0).reverse().map( (hex, index) => {
                    //hexNodes.map( (hex) => {
                        return ( 
                        <div key={index}>
                        <ListItem 
                        button
                        onClick={this.details.bind(this,hex)}
                        key={hex.number} 
                        onTouchTap={this.details.bind(this,hex)}> 
                        <Avatar className="avatar">
                        <HexagramImage below={hex.trigrams.below} above={hex.trigrams.above} />
                        </Avatar>
                        <div><b>{hex.number} - {hex.name}</b> - {hex.description}</div>
                        </ListItem>
                        <Divider />
                        </div>
                        )
                    } )
                    }
                </List>
            </div>
        )
    }
}
        
export default withRouter(DefaultList);