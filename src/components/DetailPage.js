import React from 'react';
import * as _ from 'lodash';
import * as IchingTable from '../constants/lookup.js';
import HexagramInfoCard from './HexagramInfoCard';
import { Divider } from 'material-ui';
import { Accordion, Icon } from 'semantic-ui-react'


//const DetailPage = ({match}) => {
class DetailPage extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
      let hexNumber = _.toNumber( this.props.match.params.number );
      let hex      = IchingTable.getHexagram( hexNumber );
      if ( ! hex ) {
        console.error(`Something is wrong on DetailPage. Hex shouldn't be = ${hex}`);
        console.log('props = ', this.props);
        return (<div/>);
      }
  
      let lines = _.chain( hex.interpretation.lines ).map( (line,i) => {
            return (
              <div className="line" key={i}>
                <blockquote>{line.poem}</blockquote>
                <p>{line.expl}</p>
              </div>
            );
      }).value()
  
 
      return (
        <div className="detailspage-container">
         <HexagramInfoCard hexagram={hex} trigrams />
  
            <div className="interpretation">
  
              <div className="highlight">
                <div className="oracle">
                  <blockquote>{hex.interpretation.oracle}</blockquote>
                </div>
              </div>
              <p>{hex.interpretation.resume}</p>
  
              <h3>The Image</h3>
              <Divider />
              <pre>{hex.interpretation.image.oracle}</pre>
              <p>{hex.interpretation.image.image}</p>
  
              <h3>The Judgement</h3>
              <Divider />
              <pre>{hex.oracle}</pre>
              <p>{hex.interpretation.judgment}</p>
  
              <h3>The Lines</h3>
              <Divider />
              {lines}
            </div>
        </div>
      );
    }
  }
  
  
  export default DetailPage;