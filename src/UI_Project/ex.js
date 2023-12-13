import  React from 'react';
import "./sideStyle.css"
import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f0f1f6",
  '&:hover': {
    backgroundColor:"#f0f1f6",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height:"46px",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: '306px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const drawerWidth = 258;
const Header=()=> {
  return (
    <Box sx={{display:"flex" }}>
        <CssBaseline />
        <Box
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
        >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,fontSize:"12px" ,color:"#8e94a9"}}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon className="text"/>
            </SearchIconWrapper>
            <StyledInputBase
              sx={{color:"#000"}}
              placeholder="Search Products"
              inputProps={{ 'aria-label': 'search ' }}
            />
          </Search>
          
          <Box sx={{ flexGrow:1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
                size="large"
                edge="end"
                color="inherit"
            > 
                <Avatar src="https://themewagon.github.io/connect-plus/assets/images/faces/face28.png" sx={{ width: "32px", height: "32px" }} />
                <Typography  sx={{ml:"15px", fontSize:"14px", color:"#000"}}>Henry Klein</Typography>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailOutlineIcon/>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <NotificationsNoneIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                height:"1800px",
                boxSizing: 'border-box',
                backgroundColor: "#181824",
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <List sx={{
                    width: "258px",
                    height: "56px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                    }}
                >
                    <img src="https://themewagon.github.io/connect-plus/assets/images/logo.svg" alt="img" />
                </List>
            </Toolbar>
        <List disablePadding>
            <ListItemButton className="boxmain">
                <ListItem >
                    <ListItemText primary="Main" className="text" sx={{fontSize: "13px"}} />
                </ListItem>
            </ListItemButton>
            
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <SpaceDashboardIcon sx={{fontSize:"16px", color:"#33c92d"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{color:"#44CE42"}}/>
                </ListItem>
            </ListItemButton>

            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="UI Element" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Icons" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Forms" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Charts" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="User Pages" className="text"/>
                </ListItem>
            </ListItemButton>
        </List>
        <Toolbar sx={{
                height:"110px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}>
            <Button variant="contained" sx={{
                width:"182px",
                height:"43px",
                }}
            >
                Documentation
            </Button>
        </Toolbar>

        <Divider sx={{ backgroundColor: "rgb(138, 137, 137)" }} />
        <Toolbar  sx={{height:"65px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",}}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', width: "182px", height: "31px"}}>
                <Avatar src="https://themewagon.github.io/connect-plus/assets/images/faces/face28.png" sx={{ width: "31px", height: "31px" }} />
                <Typography sx={{ fontSize: "14px", color: "#ffffff", ml: 1 }}>Henry Klein</Typography>
                <Avatar sx={{ background: "#fc5a5a", width: "27px", height: "25px", ml: 5 }} variant="rounded">3</Avatar>
            </Box>
        </Toolbar>
        <Divider sx={{ backgroundColor: "rgb(138, 137, 137)" }}/>
        <List>
            <ListItemButton>
                    <ListItem className="box">
                        <ListItemIcon>
                            <SettingsIcon className="text" />
                        </ListItemIcon>
                        <ListItemText primary="Settings" className="text"/>
                    </ListItem>
            </ListItemButton>
            <ListItemButton>
                    <ListItem className="box">
                        <ListItemIcon>
                            <SettingsIcon className="text" />
                        </ListItemIcon>
                        <ListItemText primary="Take Tour" className="text"/>
                    </ListItem>
            </ListItemButton>
            <ListItemButton>
                    <ListItem className="box">
                        <ListItemIcon>
                            <LogoutIcon className="text" />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" className="text"/>
                    </ListItem>
            </ListItemButton>
        </List>
      </Drawer>
      <Box
          component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
                <Toolbar />
                <Box sx={{backgroundColor:"red"}}>
                    <Typography paragraph>
                        hello My Friend
                    </Typography>
                    <Typography paragraph>
                        I am your best frieds
                    </Typography>
                </Box>
        </Box>
    </Box>
  );
}
export default  Header;
