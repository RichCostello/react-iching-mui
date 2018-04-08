import React from 'react';
import * as _ from 'lodash';
import * as IchingTable from '../constants/lookup.js';
import HexagramInfoCard from './HexagramInfoCard';
import { Divider } from 'material-ui';
import { Accordion, Icon, Label, Segment, Modal } from 'semantic-ui-react'



class DetailPage extends React.Component{
  state = { activeIndex: 0 }
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
 
  render() {
    const { activeIndex } = this.state;
    const { open, size } = this.state
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
        <Segment raised>
          <Label as='a' color='orange' ribbon='right' onClick={this.show('large')}>Search Portal</Label>  
          <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
        </Modal> 
          <HexagramInfoCard hexagram={hex} trigrams />
         </Segment> 
            <div className="interpretation">
            <Segment raised>
              <div className="highlight">
                <div className="oracle">
                  <blockquote>{hex.interpretation.oracle}</blockquote>
                </div>
              </div>
           
              <article> <p>{hex.interpretation.resume}</p>  </article>
              </Segment>
                      
              <Accordion fluid styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              The Image
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
              <Divider />
              <blockquote><b>{hex.interpretation.image.oracle}</b></blockquote>
              <article>{hex.interpretation.image.image} </article>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              The Judgement
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
              <Divider />
              <pre>{hex.oracle}</pre>
              <article>{hex.interpretation.judgment}</article>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Icon name='dropdown' />
              The Lines
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
              <Divider />
              <article>{lines}</article>
              </Accordion.Content>
              </Accordion>
            </div>
        </div>
      );
    }
  }
  
  
  export default DetailPage;