import React, { Component } from 'react';
import style from './HomeHeader.module.css';
import img from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSearch, manageFriendRequest } from '../Actions/users';
import HeaderAutocomplete from './HeaderAutocomplete';
import Button from '../UI/Button/Button';

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
      width: 80,
      '&:focus': {
        width: 160,
      },
    },
  },

  Bmargin: {
    marginTop: '1.1vh',
    position: 'relative',
    left: '10%',
    zIndex: 3,
  },
});


class HomeHeader extends Component {

  state = {
    invisible: false,
    badgeContent: '0',
    search: '',
    showFriendRequests: false,
  };

  onChange = (e) => {
    this.props.userSearch(e.target.value);
  }

  countPendingRequests = () => {
    let count = 0;
    if (typeof this.props.currentUser.user.pendingFriends === "undefined") {
      return count;
    } 

    Object.entries(this.props.currentUser.user.pendingFriends).forEach(([friendId, requestStatus]) => {
      if (requestStatus === 'pending') {
        count++;
      }
    });

    return count;
  };

  toggleFriendRequests = (event) => {
    event.preventDefault();
    this.setState({...this.state, showFriendRequests: !this.state.showFriendRequests});
  };

  getFriendRequests = () => {
    let requests = [];
    if (Object.entries(this.props.currentUser.user.pendingFriends).length === 0) {
      requests.push(<div key="no-pending-requeusts" className={style.FriendRequest}>
          No pending friend requests
        </div>);
        return requests;
    }
    Object.entries(this.props.currentUser.user.pendingFriends).forEach(([friendId, requestStatus]) => {
      const friend = this.props.users.filter(u => u.id === Number(friendId));
      if (requestStatus === 'pending') {
        requests.push(<div key={`friend-${friend[0].id}`} className={style.FriendRequest}>
          <Link to={`/profile-home/${friend[0].id}/`} onClick={this.visitFriend}>{friend[0].firstName} {friend[0].lastName}</Link>
          <div>
            <Button className="GreenBtn" onClick={(e) => { this.acceptFriendRequest(e, friend[0].id) }}>Accept</Button>
            <Button className="LinkBtn" onClick={(e) => { this.deleteFriendRequest(e, friend[0].id) }}>Delete</Button>
          </div>
        </div>);
      }
    });

    return requests;
  };

  visitFriend = (e) => {
    this.setState({...this.state, showFriendRequests: false});
  };

  acceptFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({...this.state, showFriendRequests: false});
    this.props.manageFriendRequest(friendId, 'accept');
  };

  deleteFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({...this.state, showFriendRequests: false});
    this.props.manageFriendRequest(friendId, 'delete');
  };

  render() {
    const { classes } = this.props;
    const { invisible, badgeContent } = this.state;

    return (
      <div className={style.HeadContainer}>
      <div className={style.HeaderContent}>
        <div className={style.FirstElem}>
          <NavLink to="/home" className={style.LogoBox} />
          <div className={classes.root}>
             <Toolbar>
              <div className={classes.grow} />

              <div className={classes.search}>
                <HeaderAutocomplete route={this.props.route} />
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

            <Badge color="secondary" badgeContent={this.countPendingRequests()} invisible={invisible} className={classes.Bmargin}>
              <NavLink to="/" onClick={this.toggleFriendRequests} className={style.Icon + ' ' + style.FriendsRequests} />
              {this.state.showFriendRequests && <div className={style.FriendRequestsContainer}>{this.getFriendRequests()}</div>}
            </Badge>

            <Badge color="secondary" badgeContent={badgeContent} invisible={invisible} className={classes.Bmargin}><NavLink to="/" className={style.Icon + ' ' + style.Messages} /></Badge>
            
            <Badge color="secondary" badgeContent={badgeContent} invisible={invisible} className={classes.Bmargin}><NavLink to="/" className={style.Icon + ' ' + style.Notifications} /></Badge>
          
          <NavLink to="/logout" className={style.Icon + ' ' + style.Logout} />
        </nav>
        </div>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    userSearch: (query) => dispatch(userSearch(query)),
    manageFriendRequest: (userId, status) => dispatch(manageFriendRequest(userId, status))
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(themeStyles)(HomeHeader));