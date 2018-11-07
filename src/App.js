import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchAppBar from './components/nav/nav';
import FullWidthTabs from './components/tabs/tabs';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#fff' },
    secondary: { main: '#11cb5f' },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  render() {
    
    const { classes } = this.props; 


    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">      
        <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <SearchAppBar></SearchAppBar>
            <FullWidthTabs></FullWidthTabs>
          </Grid>   
          
        </Grid>
      </div>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
