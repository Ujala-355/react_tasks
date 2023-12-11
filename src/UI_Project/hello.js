import * as React from 'react';
import "./sideStyle.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const drawerWidth = 258;
export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
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
          '& .MuiDrawer-paper':{
            width: drawerWidth,
            height:"1800px",
            boxSizing: 'border-box',
            backgroundColor: "#181824",
            p:"4px 0px",
            display:"flex",
            flexDirection:"column",
            overFlow:"auto",

          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{
          width: "258px",
          height: "56px",
          border: "2px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>

          <img src="https://themewagon.github.io/connect-plus/assets/images/logo.svg" alt="img" />
        </List>


        
        <List>
            <ListItem>
                <ListItemButton className="boxmain" >
                    <ListItemText primary="Main" className="text" sx={{fontSize: "13px"}} />
                </ListItemButton>
            </ListItem>
        
            <ListItem className="box">
              <ListItemButton >
                <ListItemIcon className="iconbox">
                    <DashboardCustomizeIcon className="icon" sx={{color:"#33c92d",fontSize:"16px"}} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{color:"#44CE42",}}/>
              </ListItemButton>
            </ListItem>

            <ListItem className="box">
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="UI Elemenets " className="text"/>
                    <ArrowBackIosIcon sx={{width:"12px", height:"12px"}} className="text"/>
                </ListItemButton>
            </ListItem>

            <ListItem className="box">
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Icons" className="text"/>
                </ListItemButton>
            </ListItem>

            <ListItem className="box">
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Forms" className="text"/>
                </ListItemButton>
            </ListItem>

            <ListItem className="box">
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Charts" className="text"/>
                </ListItemButton>
            </ListItem>

            <ListItem className="box">
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Tables" className="text"/>
                </ListItemButton>
            </ListItem>

            <ListItem className="box"> 
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="User Pages" className="text"/>
                    <ArrowBackIosIcon sx={{width:"12px", height:"12px"}} className="text"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem></ListItem>
            <ListItem sx={{
                width: "258px",
                height: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                <Button variant="contained" sx={{
                        width:"182px",
                        height:"43px",
                    }}
                >
                    Documentation
                </Button>
            </ListItem>
            <ListItem></ListItem>
        </List>
        <Divider sx={{background:"#A7AFB7"}}/>
        <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="email"/>
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
          {/* Your content goes here */}
        </Typography>
      </Box>
    </Box>
  );
}