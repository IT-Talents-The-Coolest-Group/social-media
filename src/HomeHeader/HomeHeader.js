import React, { Component } from 'react';
import style from './HomeHeader.module.css';
import img from '../assets/images/profile1.png';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSearch, manageFriendRequest } from '../Actions/users';
import HeaderAutocomplete from './HeaderAutocomplete';
import FriendsItem from '../Friends/FriendsItem';

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
    this.setState({ ...this.state, showFriendRequests: !this.state.showFriendRequests });
  };

  acceptFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({ ...this.state, showFriendRequests: false });
    this.props.manageFriendRequest(friendId, 'accept');
};

deleteFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({ ...this.state, showFriendRequests: false });
    this.props.manageFriendRequest(friendId, 'delete');
};

  getFriendRequests = () => {
    let requests = [];
    if (!this.props.currentUser.user.pendingFriends || Object.entries(this.props.currentUser.user.pendingFriends).length === 0) {
      requests.push(<div key="no-pending-requeusts" className={style.FriendRequest}>
        No pending friend requests
        </div>);
      return requests;
    }
    Object.entries(this.props.currentUser.user.pendingFriends).forEach(([friendId, requestStatus]) => {
      const friend = this.props.users.filter(u => u.id === Number(friendId));
      if (requestStatus === 'pending') {
        requests.push(<FriendsItem key={`friend-${friend[0].id}`} friend={friend[0]} deleteFriend={this.deleteFriendRequest} acceptFriend={this.acceptFriendRequest} />);
      }
    });

    return requests;
  };

  visitFriend = (e) => {
    this.setState({ ...this.state, showFriendRequests: false });
  };

  acceptFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({ ...this.state, showFriendRequests: false });
    this.props.manageFriendRequest(friendId, 'accept');
  };

  deleteFriendRequest = (e, friendId) => {
    e.preventDefault();
    this.setState({ ...this.state, showFriendRequests: false });
    this.props.manageFriendRequest(friendId, 'delete');
  };

  render() {
    const { classes } = this.props;
    const { invisible } = this.state;

    if (this.props.currentUser.user === null) {
      return(<>Loading...</>);
    }

    // todo move in componentDidMount
    const friendRequests = this.getFriendRequests();
    let requestContainerClasses = [];
    requestContainerClasses.push(style.FriendRequestsContainer);
    if (!this.props.currentUser.user.pendingFriends || Object.entries(this.props.currentUser.user.pendingFriends).length < 1) {
      requestContainerClasses.push(style.NoFriendRequests);
    }

    const userId = this.props.currentUser.user.id;
    return (
      <div className={style.HeadContainer}>
        <div className={style.HeaderContent}>
          <div className={style.FirstElem}>
            <NavLink to={`/home/${userId}/`} className={style.LogoBox} />
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
            <NavLink to={`/profile-home/${userId}/`} className={style.Icon + ' ' + style.Profile}>
              <Avatar alt="Profile Photo" src={img} className={classes.avatar} />
            </NavLink>
            <div className={style.Icon}>
              <NavLink className={style.HeaderProf} to={`/profile-home/${userId}/`}>{this.props.currentUser.user.firstName}</NavLink>
            </div>

            <div className={style.Icon}>
              <NavLink className={style.HomePage} to={`/home/${userId}/`}>Home</NavLink>
            </div>

            <Badge color="secondary" badgeContent={this.countPendingRequests()} invisible={invisible} className={classes.Bmargin}>
              <NavLink to="/" onClick={this.toggleFriendRequests} className={style.Icon + ' ' + style.FriendsRequests} />
              {this.state.showFriendRequests && <div className={requestContainerClasses.join(' ')}>
                {friendRequests}
              </div>}
            </Badge>

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