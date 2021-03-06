import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  typography: {
    useNextVariants: true,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 600,
      '&:focus': {
        width: 600,
      },
    },
  },
});

class SearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }
  render(){    
    const { classes } = this.props; 
    return (
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton> */}
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Consumer Law Group
              </Typography>
              <div className={classes.grow} />
              <a href="https://translate.google.com">              
                <i className="material-icons translate">
                  g_translate                  
                  {/* <Typography>Translate</Typography> */}
                </i>
              </a>
              {/* <div className={classes.search}>
              <form action='https://www.google.com/search' method='GET'>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  name='q'
                  placeholder="Google…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </form>
              </div> */}
            </Toolbar>
          </AppBar>
        </div>
    );
  }
  
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
