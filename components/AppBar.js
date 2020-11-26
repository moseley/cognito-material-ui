import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Auth } from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import Icon from '@material-ui/core/Icon'
import Link from './Link'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  // toolbar: {
  //   flexWrap: 'wrap',
  // },
  toolbar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.contrastText,
  },
  button: {
    margin: theme.spacing(1, 1.15),
    background: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

const AppBar = ({ siteName, window }) => {
  const classes = useStyles()
  const [user, setUser] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => setUser(null))
  }, [])
  const container = window !== undefined ? () => window().document.body : undefined
  return (
    <MuiAppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.title} noWrap>
          {siteName ? siteName : ''}
        </Typography>
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List>
                <ListItem button key="home">
                  <ListItemIcon>
                    <Icon className="fas fa-home" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="profile">
                  <ListItemIcon>
                    <Icon className="fas fa-user-circle" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
          </Hidden>
        </nav>
        {user ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Icon className="fas fa-user-circle" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link href='/profile'>Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href='/logout'>Logout</Link></MenuItem>
            </Menu>
          </div>
        ) : (
          <Button href="/profile" color="default" variant="outlined" className={classes.button}>
            Login
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
  )
}

AppBar.propTypes = {
  siteName: PropTypes.string,
  window: PropTypes.func
}

export default AppBar