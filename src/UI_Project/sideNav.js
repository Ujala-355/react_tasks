import * as React from 'react';
import "./sideStyle.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from "@mui/material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 258;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Permanent drawer
                </Typography>
            </Toolbar>
        </AppBar>
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
        <List>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                
                </ListItemIcon>
                <ListItemText primary="bye"/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
                <Toolbar />
                <Typography paragraph>
                hello My Friend
                </Typography>
                <Typography paragraph>
                I am your best frieds
                </Typography>
        </Box>
    </Box>
  );
}

