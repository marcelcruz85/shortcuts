import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchAppBar from './components/nav/nav';
import ImgMediaCard from './components/shortcut/shortcut';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  render() {
    
    const { classes } = this.props; 


    return (
      <div className="App">      
      <div className={classes.root}>
      <Grid container spacing={12} justify="center">
        <Grid item xs={12}>
          <SearchAppBar></SearchAppBar>
        </Grid>   
        <Grid item xs={12} container spacing={12} justify="center">
        <div className="image-logo">
          <img src='/images/logo.png' className="logo" alt="logo" />
        </div>  
        </Grid>
        <ImgMediaCard></ImgMediaCard>
        
      </Grid>
    </div>
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
