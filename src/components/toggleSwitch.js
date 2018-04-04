import React from 'react';

import { withStyles } from 'material-ui/styles';

import DefaultList from './DefaultList';
import ReverseList from './ReverseList';
import RandomList from './RandomList';
import Switch from 'material-ui/Switch';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    switchInline: {
        display: 'block'
    }
  });

class Switches extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                checkedB: false,
            };
    }

  handleChange = name => event => {
      const switchReverse = this.state.checkedB;
      this.setState({
       checkedB: !switchReverse
      });
  };
  handleRandom = name => event => {
    const switchRandom = this.state.checkedD;
    this.setState({
        checkedD: !switchRandom
    });
};

  render() {
    const { classes } = this.props;
    let defaultList = <DefaultList />;
    if (this.state.checkedB) {
      defaultList = <ReverseList />;
    }
    if (this.state.checkedD) {
        defaultList = <RandomList />
    }
    
    return (
      <div>
         <div className={classes.buttonContainer}>
         <div>
         <label className={classes.switchInline}>Reverse Hexes</label>
        <Switch
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedA"
          color="primary"
        />
        </div>
        <div>
        <label className={classes.switchInline}>Random Hexes</label>
        <Switch
          checked={this.state.checkedD}
          onChange={this.handleRandom('checkedD')}
          value="checkedC"
          color="primary"
        />
        </div>
        </div>
        {defaultList}
      </div>
    );
  }
}

export default  withStyles(styles)(Switches);