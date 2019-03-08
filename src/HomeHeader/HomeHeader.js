import React, { Component } from 'react';
import style from './HomeHeader.module.css';
import img from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  },
  Bmargin: {
    marginTop: '1.1vh',
    position: 'relative',
    left: '7vh',
    zIndex: 3,
  },
  // avatar: {
  //   height: '6vh',
  //   width: '6vh',
  //   border: '1px solid white'
  // }
});


class HomeHeader extends Component {

  state = {
    invisible: false,
    badgeContent: '0'
  };

  render() {
    const { classes } = this.props;
    const { invisible, badgeContent } = this.state;

    return (
      <div className={style.HeadContainer}>

        <div className={style.FirstElem}>
          <NavLink to="/home" className={style.LogoBox} />
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
            <Avatar alt="Profile Photo" src={img} className={classes.avatar} />
          </NavLink>
          <div className={style.Icon}>
            <NavLink className={style.HeaderProf} to="/profile-home">{this.props.currentUser.user.firstName}</NavLink>
          </div>

          <div className={style.Icon}>
            <NavLink className={style.HomePage} to="/home">Home</NavLink>
          </div>
          <Badge color="secondary" badgeContent={badgeContent} invisible={invisible} className={classes.Bmargin}><></></Badge>
          <NavLink to="/" className={style.Icon + ' ' + style.FriendsRequests} />
          <Badge color="secondary" badgeContent={badgeContent} invisible={invisible} className={classes.Bmargin}><></></Badge>
          <NavLink to="/" className={style.Icon + ' ' + style.Messages} />
          <Badge color="secondary" badgeContent={badgeContent} invisible={invisible} className={classes.Bmargin}><></></Badge>
          <NavLink to="/" className={style.Icon + ' ' + style.Notifications} />
          <NavLink to="/logout" className={style.Icon + ' ' + style.Logout} />
        </nav>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser,
  };
};


export default connect(mapStateToProps, null)(withStyles(themeStyles)(HomeHeader));
// export default withStyles(themeStyles)(HomeHeader);