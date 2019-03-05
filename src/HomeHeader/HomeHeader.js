import React, { Component } from 'react';
// import App from '../App/App.css';
// import styles from '../Header/Header.module.css';
import style from './HomeHeader.module.css';
import img from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

const themeStyles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
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
    color: '#bbdefb',
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
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
});


class HomeHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={style.HeadContainer}>

        <div className={style.FirstElem}>
          <NavLink to="/home" className={style.LogoBox} />
          {/* <InputBase className= {style.SearchInput} type="text" placeholder="Search"/> */}

          <div className={classes.root}>
            <Toolbar>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Toolbar>
          </div>
        </div>
        <nav className={style.SecondElem}>
          <NavLink to="/profile-home" className={style.Icon + ' ' + style.Profile}>
            <Avatar alt="Profile Photo" src={img} />
          </NavLink>
          <div className={style.Icon }>
            <NavLink className={style.HeaderProf} to="/profile-home">UserName</NavLink></div>

          <div className={style.Icon}>
            <NavLink className={style.HomePage} to="/home">Home</NavLink>
          </div>
          <NavLink to="/" className={style.Icon + ' ' + style.FriendsRequests}></NavLink>
          <NavLink to="/" className={style.Icon + ' ' + style.Messages}></NavLink>
          <NavLink to="/" className={style.Icon + ' ' + style.Notifications}></NavLink>
          <NavLink to="/logout" className={style.Icon + ' ' + style.Logout}></NavLink>
        </nav>
      </div>
    )
  }
}

//   HomeHeader.propTypes = {
//    classes: PropTypes.object.isRequired,
//  };

export default withStyles(themeStyles)(HomeHeader);