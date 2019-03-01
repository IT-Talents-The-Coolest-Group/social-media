import React, { Component } from 'react';
import styles from '../Header/Header.module.css';
import style from './HomeHeader.module.css';
// import { Link } from 'react-router-dom';
import img from '../assets/images/default-profile-picture-circle-7.png';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


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
     color: '#bbdefb' ,
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
 });


 class HomeHeader extends Component {
   render() {
       const { classes } = this.props;

       return (
     <div className={styles.HeadContainer}>

        <div className={style.FirstElem}>
           <div className={style.LogoBox}></div>
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
        {/* linkove */}
           <div className={style.Icon + ' ' + style.Profile}>
           <Avatar alt="Profile Photo" src={img} />
           <p>UserName</p>
           </div>
           <div className={style.Icon}>
            <p>Home</p>
           </div> 
           <div className={style.Icon + ' ' + style.FriendsRequests}></div> 
           <div className={style.Icon + ' ' + style.Messages}></div>
           <div className={style.Icon + ' ' + style.Notifications}></div>
           <div className={style.Icon + ' ' + style.Logout}></div>
        </nav>
    </div>
       )
   }}

//   HomeHeader.propTypes = {
//    classes: PropTypes.object.isRequired,
//  };

export default withStyles(themeStyles)(HomeHeader);