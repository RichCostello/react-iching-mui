import React from 'react';
import { List, ListItem, Avatar} from 'material-ui';
import * as IchingTable from '../constants/lookup.js';
import { HexagramImage } from './HexagramImage';
import { withRouter } from 'react-router-dom';

var lStyle = {
  backgroundColor: '#fffae6'
}

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

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
        let hexNodes = shuffleArray(this.state.hexagrams);
        return (
            <div style={lStyle}>
                <List>
                <h4 className="ListSub">The King Wen sequence</h4>
                    {
                    hexNodes.map( (hex) => {
                        return ( 
                    
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
                        )
                    } )
                    }
                </List>
            </div>
        )
    }
}
        
export default withRouter(DefaultList);