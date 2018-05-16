import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider  } from 'react-redux';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/rootReducer'
import './styles/index.css';
import PermanentDrawer from './components/PermanentDrawer';
import DetailPage from './components/DetailPage';
import registerServiceWorker from './registerServiceWorker';
import orange from 'material-ui/colors/orange';
import green from 'material-ui/colors/green';


const theme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: green,
    },
  
});

const history = createBrowserHistory()

function configureStore( initialState ) {
  let fCreateStore = compose(
    applyMiddleware( invariant(), thunk ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = fCreateStore(rootReducer);

  return store;
}
let store = window.store = configureStore();


ReactDOM.render(
  
     <Provider store={store}>
     <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
     <MuiThemeProvider theme={theme}>    
     <Switch>
       <Route path="/" component={PermanentDrawer} />
       <Route path="/details" component={DetailPage}/>
     </Switch>   
    </MuiThemeProvider>
    </Router>  
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

