import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useAuth} from "../../hooks/useAuth";
import {NavLink, Outlet} from 'react-router-dom';
import {Suspense} from "react";
import {logOut} from "../../redux/auth/operations";
import {useDispatch} from "react-redux";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { isLoggedIn } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Button variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1,':hover': { backgroundColor: 'grey', color: '#fff' } }}>HOME</Button>
      </Typography>
      <Divider />
      <List>
        {isLoggedIn ? (
          <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome, {user.name}
            </Typography>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/contacts" sx={{ textAlign: 'center',':hover': { backgroundColor: 'grey', color: '#fff' } }}>
                <ListItemText primary="Contacts" />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center',':hover': { backgroundColor: 'grey', color: '#fff' } }} onClick={() => dispatch(logOut())}>
              <ListItemText primary="LOGOUT" />
            </ListItemButton>
          </ListItem>
          </>
        ) :
          <>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/login" sx={{ textAlign: 'center',':hover': { backgroundColor: 'grey', color: '#fff' } }}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/register" sx={{ textAlign: 'center',':hover': { backgroundColor: 'grey', color: '#fff' } }}>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </>
        }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#003366' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button variant="h2" component={NavLink} to="/"  sx={{ flexGrow: 1, color: '#fff', ':hover': { backgroundColor: '#002855' } }}>HOME</Button>
            {isLoggedIn ? (
              <Button variant="h5" component={NavLink} to="contacts"  sx={{ color: '#fff', ':hover': { backgroundColor: '#002855' } }}>
                CONTACTS
              </Button>
            ) : null }
          </Typography>
          {!isLoggedIn ? (
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button variant="h5" component={NavLink} to="/login"  sx={{ color: '#fff', ':hover': { backgroundColor: '#002855' } }}>
              LOGIN
            </Button>
            <Button variant="h5" component={NavLink} to="/register"  sx={{ color: '#fff', ':hover': { backgroundColor: '#002855' } }}>
              REGISTER
            </Button>
          </Box>
          ) :
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Typography variant="p" sx={{ padding: '6px 12px' }}>
                Welcome, {user.name}
              </Typography>
              <Button variant="h5"  sx={{ color: '#fff', ':hover': { backgroundColor: '#002855' } }} onClick={() => dispatch(logOut())}>
                LOGOUT
              </Button>
            </Box>
          }
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Box>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
