import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import storageUtiles from '../../Utils/storageUtiles';
import MainListItems from './listItems';
import memoryUtils from '../../Utils/memoryUtils';
import useStyles from './style';
import formatDate from '../../Utils/dateUtils';
import siderBarList from '../../Config/siderBarList';
import AlertDialog from '../../Components/dialog';

export default function Dashboard() {
  const classes = useStyles();
  const path = useLocation().pathname.replace('/dashboard/', "")
  const [open, setOpen] = useState(true);
  const [nowTime, setNowTime] = useState(() => formatDate());
  const [pageName, setPageName] = useState("首页");
  const navigate = useNavigate()

  const logOut = () => {
    storageUtiles.removeUser(memoryUtils.user)
    memoryUtils.user = {};
    navigate('/login')
  }

  const findNowPageName = () => {
    siderBarList.forEach(item => {
      if (item.key === path) {
        setPageName(item.title)
      }
      else if (item.children) {
        item.children.forEach(items => {
          if (items.key === path) {
            setPageName(items.title)
          }
        })
      }
    })
  }

  useEffect(() => {
    findNowPageName();
  })

  useEffect(() => {
    const timeID = setTimeout(
      () => {
        setNowTime(formatDate())
      }, 1000);
    return () => {
      clearTimeout(timeID)
    }
  }, [nowTime])

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (Object.keys(memoryUtils.user).length === 0) {
    return <Navigate replace to='/login' />
  }
  else {
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}>
                你好&nbsp;{memoryUtils.user.userName}
              </Typography>
              <div>
                当前时间:{nowTime}
              </div>
              <AlertDialog onClick={logOut} >
                退出登录
              </AlertDialog>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List><MainListItems /></List>

          </Drawer>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <h1>当前目录是:{pageName}</h1>
              <div className={classes.mainWrapper}>
                <Outlet />
              </div>
            </Container>
            <Box component="div" pt={4}>
              <Copyright />
            </Box>
          </main>

        </div>
      </>
    );
  }
}

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'poweredbyhanzhenFang © '}
      <Link color="inherit" href="https://mui.com/">
        React后台管理系统
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}