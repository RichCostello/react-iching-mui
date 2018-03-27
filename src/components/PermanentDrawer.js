import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Drawer, AppBar, Toolbar, Typography, IconButton, Hidden } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import ListPage from './ListPage';
import HomePage from './HomePage';
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import DetailPage from './DetailPage';
import AppBarHex from './AppBarHex';
import { TransitionGroup, CSSTransition } from "react-transition-group";


const drawerWidth = 300;

const styles = theme => ({
  root: {
    width: '100%',
    maxHeight:'100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100vh',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    overflow: 'auto',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)',
      marginTop: 64,
    },
  },
});




class PermanentDrawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    };   
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };


  render() {
    const { classes } = this.props;

    const drawer = (
      <div className={classes.drawerHeader}>
        <ListPage />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
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
              <Link to="/">React Iching</Link>
              </Typography>
            <Route  exact  path={`/details/:number/:name`} render={(props) => ( <AppBarHex {...props} /> )}/>
            </Toolbar>
      
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
           <div>
           <TransitionGroup>
             <CSSTransition component="div" key={this.props.location.key} classNames="page-transition" appear enter exit timeout={250} mountOnEnter={true} unmountOnExit={true}>
            <div>
             <Switch location={this.props.location}>
             <Route  exact  path={`/`}component={HomePage}/>
             <Route  exact  path={`/home`}component={HomePage}/>
             <Route  exact  path={`/details/:number/:name`} component={DetailPage}/>
             <Redirect from="/react-iching-mui" exact to="/home" />
             </Switch>
             </div>
             </CSSTransition>
           </TransitionGroup>
           </div>    
          </main>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect( null )(withStyles(styles, { withTheme: true })(PermanentDrawer));

  


