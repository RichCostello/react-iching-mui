import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    console.log("This is default Mode");
  };

  handleReverse = () => {
    this.setState({ anchorEl: null });
    console.log("This is the sort feature");
  }

  handleRandom = () => {
    this.setState({ anchorEl: null });
    console.log("This is the Random List");
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Sort Hexagons
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Default</MenuItem>
          <MenuItem onClick={this.handleReverse}>Reverse</MenuItem>
          <MenuItem onClick={this.handleRandom}>Random</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;