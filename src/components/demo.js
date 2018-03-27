import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import * as IchingTable from '../constants/lookup.js';
import DefaultList from './DefaultList';
import ReverseList from './ReverseList';
import RandomList from './RandomList';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  buttonContainer: {
    textAlign: 'center'
  }
});

class RaisedButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hexagrams: IchingTable.getAllHexagrams(),
          showRev: false,
          showRand: false
        };
      }

    details(hex) {
    this.props.history.push( `/details/${hex.number}/${hex.name}` );
    }

    toggleMeAgain = () => {
    const doesToggleAgain = this.state.showRev;
    this.setState({
        showRev: !doesToggleAgain
    });
    };

    toggleMeRandom = () => {
        const randomToggleAgain = this.state.showRand;
        this.setState({
            showRand: !randomToggleAgain
        });
    }

  render() {
    const { classes } = this.props;
    let hexNodes = this.state.hexagrams;
    
    let defaultList = <DefaultList />;
    if (this.state.showRev) {
      defaultList = <ReverseList />;
    }
    if (this.state.showRand) {
        defaultList = <RandomList />
    }
        return (
            <div>
            <div className={classes.buttonContainer}>
            <Button variant="raised" className={classes.button} onClick={this.toggleMeAgain}>
                Reverse
            </Button>
            <Button variant="raised" className={classes.button} onClick={this.toggleMeRandom}>
                Random
            </Button>
            </div>
            {defaultList}
            </div>
        );    
    }
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);