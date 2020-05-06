import React from 'react';
//import { Link as Link } from 'react-router-dom';
import Link from "next/link";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import {Menu as MenuIcon} from 'react-feather';
import Logo from '../components/Logo';
import Account from './Account';
import Contacts from './Contacts';
import Notifications from './Notifications';
import Search from './Search';
//import Settings from './Settings';

export const THEMES = {
  LIGHT: 'LIGHT',
  ONE_DARK: 'ONE_DARK',
  UNICORN: 'UNICORN'
};


const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 64
  }
}));

function TopBar({
                  className,
                  onMobileNavOpen,
                  ...rest
                }) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon/>
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Link to="/">
            <Logo/>
          </Link>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        {/*<Search />*/}
        {/*<Contacts />*/}
        {/*<Notifications/>*/}
        {/*<Settings />*/}
        <Box ml={2}>
          {/*<Account/>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
