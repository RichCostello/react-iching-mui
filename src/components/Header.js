import React from 'react';
import { connect } from 'react-redux';
import * as HexagramActions from '../actions/HexagramActions.js';
import { AppBar, Card, CardHeader, CardTitle, CardText, Avatar, Icons, FlatButton, IconButton, FontIcon, Styles, Toolbar, Typography} from 'material-ui';
import PropTypes from 'prop-types';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import ArrowBack from 'material-ui-icons/ArrowBack';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const styles = theme => ({
    
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
      }
});

class Header extends React.Component {
    contextTypes: {
        location: React.ReactPropTypes.object
    };

    render() {
        const { classes, theme } = this.props;
        return (
        <div>
             <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
              <Link to="/">React Iching Meme</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        );
    }

    headerPathToTitle( mlocation, params) {
        let path = mlocation.pathname;
        console.log( this.context );

        if (path ===`/`) {
            return {icon: <IconButton onTouchTap={ this.handleBackButton } onClick={ this.handleBackButton}><ArrowBack /></IconButton>, name: `All Hexagrams`}
            } else if (path.startsWith('/details') ) { 
                return {icon: <IconButton onTouchTap={ this.handleBackButton } onClick={ this.handleBackButton }><ArrowBack /></IconButton>,
                name: `${path}`}
        } else {
            return {icon: <IconButton/>,
                    name: 'I-ching'}
        }
    }

    handleBackButton( ev ) {
        window.history.back()
    }

    clearHexagram( ev ) {
        window.store.dispatch(HexagramActions.clearHexagram());
      };
    
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default connect( null )(withStyles(styles, { withTheme: true })(Header));