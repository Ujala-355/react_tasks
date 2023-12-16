import * as React from 'react';
import "./sideStyle.css"
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Drawer,
    CssBaseline,
    Divider,
    Avatar,
    Grid,
    Paper,
    styled,
} from '@mui/material'                                                                                                                                          
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HttpsIcon from '@mui/icons-material/Https';
import CircularProgress from '@mui/material/CircularProgress';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


const drawerWidth = 258;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f0f1f6',
    '&:hover': {
      backgroundColor: '#f0f1f6',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '46px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
      padding: theme.spacing(1.5, 1.5, 1.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100ch',
      },
    },
}));
const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 650,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
];
const valueFormatter = (value) => `${value}mm`;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:"white" }}
      >
        <Toolbar>
        <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2, fontSize: '12px', color: '#8e94a9' }}
                >
                    <MenuIcon />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon className="text" />
                    </SearchIconWrapper>
                    <StyledInputBase
                    sx={{ color: '#000' }}
                    placeholder="Search Products"
                    inputProps={{ 'aria-label': 'search ' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    }}
                >
                    <Typography sx={{ fontSize: '14px', color: '#000' }}>Reports</Typography>
                    <ArrowDropDownIcon sx={{ width: '20px', color: '#aab2bd' }} />

                    <Typography sx={{ ml: '15px', fontSize: '14px', color: '#000' }}>Projects</Typography>
                    <ArrowDropDownIcon sx={{ width: '20px', color: '#aab2bd' }} />

                    <Avatar variant="square" sx={{ ml: '15px', width: '21px', height: '16px' }}>
                    <img src="https://www.shutterstock.com/image-vector/american-flag-isolated-on-white-260nw-243427717.jpg" alt="flag" />
                    </Avatar>
                    <Typography sx={{ ml: '15px', fontSize: '14px', color: '#000' }}>English</Typography>
                    <ArrowDropDownIcon sx={{ width: '20px', color: '#aab2bd' }} />

                    <Avatar src="https://themewagon.github.io/connect-plus/assets/images/faces/face28.png" sx={{ ml: '15px', width: '32px', height: '32px' }} />
                    <Typography sx={{ ml: '15px', fontSize: '14px', color: '#000' }}>Henry Klein</Typography>
                    <ArrowDropDownIcon sx={{ width: '20px', color: '#aab2bd' }} />

                    <MailOutlineIcon sx={{ ml: '15px',color:"black" }} />

                    <NotificationsNoneIcon sx={{ ml: '15px',color:"black" }} />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    color="inherit"
                    >
                    <MoreIcon sx={{backgroundColor:"red"}} />
                    </IconButton>
                </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"black",
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
                        <StoreIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="UI Element" className="text"/>
                    <ArrowBackIosNewIcon sx={{ width: '10px', color: '#8e94a9' }} />
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <AccountBoxIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Icons" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <MenuIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Forms" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <BarChartIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Charts" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <MenuIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Tables" className="text"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem className="box">
                    <ListItemIcon>
                        <HttpsIcon sx={{fontSize:"16px", color:"#8e94a9"}}/>
                    </ListItemIcon>
                    <ListItemText primary="User Pages" className="text"/>
                    <ArrowBackIosNewIcon sx={{ width: '10px', color: '#8e94a9' }} />
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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3,backgroundColor:"#F0F1F6", }}
      >
        <Toolbar />
        <Grid container sx={{
            background: "#fff",
            borderRadius: "3px",
            p:2
            }}
        >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography sx={{
                fontSize: "14px",
                color: "#7e7e7e",
              }}>
                Like what you see? Check out our premium version for more.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{
              display: "flex",
              justifyContent: "flex-end"
            }}>
              <Button sx={{
                background: "rgba(249, 249, 249, 0.7)",
                color: "#7e7e7e",
                fontSize: "10px",
              }}>
                Download Free Version
              </Button>
              <Button sx={{
                backgroundColor: "#a461d8",
                color: "white",
                fontSize: "10px",
                marginLeft: "10px"
              }}>
                Upgrade To Pro
              </Button>
              <CloseIcon sx={{ color: "#7e7e7e", fontSize: "20px",marginLeft: "10px"}} />
            </Grid>
          </Grid>
          <Grid container  sx={{
              p:1,
              mt: "20px",
              mb: "20px",
            }}
          >
              <Grid item lg={5} md={6} xs={12} sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Typography variant="h5" sx={{ fontFamily: '"nunito-bold", sans-serif', fontSize: "1.5rem" , }}>
                    Overview dashboard
                  </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} sx={{
                  background: "#fff",
                  textAlign:"center",
                  marginLeft: "auto",
                  p:1.5
              }}>
                  <Typography sx={{ fontSize: "12px", color: "#7e7e7e" }}>7 Days | 1 Month | 3 Month</Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} sm={12} sx={{
                  background: "#fff",
                  marginLeft:"auto",
                  p:1.5
                  }}
              >
                  <Typography sx={{
                      fontSize: "12px",
                      color: "#7e7e7e",
                      display: "flex",
                      justifyContent: "flex-end",
                  }}>
                      <EventIcon sx={{ fontSize: "12px"}} />
                      23 Mar 2019-24 Mar 2019
                      <KeyboardArrowDownIcon sx={{ fontSize: "12px" }} />
                  </Typography>
              </Grid>
            </Grid>
            <Grid
                container
                sx={{
                    alignItems: "center",
                }}
            >
                <Grid item xs={0}>
                    <Box sx={{textAlign: "start" }}>
                    <Typography sx={{ fontSize: "14px", color: "#7E7E7E", padding: "0px 10px 0px 0px" }}>
                        Users
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={"auto"}>
                    <Box p={2} sx={{ fontSize: "14px", color: "#7E7E7E"}}>
                        Business
                    </Box>
                </Grid>
                <Grid item xs={"auto"}>
                    <Box p={2} sx={{ fontSize: "14px", color: "#7E7E7E"}}>
                        Performance
                    </Box>
                </Grid>
                <Grid item xs={"auto"}>
                    <Box p={2} sx={{ fontSize: "14px", color: "#7E7E7E"}}>
                        Conversion
                    </Box>
                </Grid>
                <Grid item xs={"auto"} sx={{marginLeft: "auto" }}>
                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                    >
                    <DashboardIcon sx={{ fontSize: "14px", color: "#7E7E7E" }} />
                    <MoreVertIcon sx={{ fontSize: "12px", color: "#7E7E7E" }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={.5}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h3" sx={{fontSize:"16px"}}>Orders</Typography>
                        <Typography variant="h2" sx={{ 
                            fontSize:"1.5rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"20px"
                        }}
                        >932.00</Typography>
                        <CircularProgress variant="determinate" value={75} style={{width: 125, height: 125,paddingtop:10}} >
                            <LightbulbIcon />
                        </CircularProgress>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",pt:"20px"}}>Completed</Typography>
                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"20px",
                            pb:"64px",
                            }}
                        >500</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h3" sx={{fontSize:"16px"}}>Unique Visitord</Typography>
                        <Typography variant="h2" sx={{ 
                            fontSize:"1.5rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"20px"
                            }}
                        >756,00</Typography>
                        <CircularProgress variant="determinate" value={60} style={{width: 125, height: 125,paddingtop:10}} >
                            <LightbulbIcon />
                        </CircularProgress>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",pt:"20px"}}>Increased since</Typography>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",}}>yesterday</Typography>

                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"50px",
                            }}
                        >50%</Typography>
                    </Paper>
                </Grid>

                <Grid  item xs={12} sm={6} md={3}>
                    <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h3" sx={{fontSize:"16px"}}>Impressions</Typography>
                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1.5rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"20px"
                            }}
                        >100,38</Typography>
                        <CircularProgress variant="determinate" value={100-60} style={{width: 125, height: 125,paddingtop:10}} >
                            <LightbulbIcon />
                        </CircularProgress>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",pt:"20px"}}>Increased since</Typography>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",}}>yesterday</Typography>

                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"50px",
                            }}
                        >35%</Typography>
                    </Paper>
                </Grid>

                <Grid  item xs={12} sm={6} md={3}>
                    <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h3" sx={{fontSize:"16px"}}>Followers</Typography>
                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1.5rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"20px"
                            }}
                        >4250k</Typography>
                        <CircularProgress variant="determinate" value={20} style={{width: 125, height: 125,paddingtop:10}} >
                            <LightbulbIcon />
                        </CircularProgress>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",pt:"20px"}}>Decreased since</Typography>
                        <Typography sx={{fonttSize:"12px",color: "#7E7E7E",}}>yesterday</Typography>

                        <Typography variant="h2" sx={{ 
                            display: "block",
                            fontSize:"1rem",
                            fontFamily: '"nunito-bold", sans-serif',
                            pt:"10px",
                            pb:"50px",
                            }}
                        >25%</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container  mt={2} p={2} sx={{background:"white"}}>
                <Grid ld={6} md={6} sm={12} xs={12} sx={{fontSize:"14px"}}>
                    <Typography>Recent Activity</Typography>
                </Grid>
                <Grid ld={6} md={6} sm={12} xs={12} p={1} sx={{display:"flex",justifyContent: "flex-end"}}>
                    <MoreIcon sx={{fontSize:"14px"}}/>
                </Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <Grid item container direction="row"  xs={12}>
                        <Grid item xs={6} md={6} sx={{fontSize:"14px", padding:0}}>Total Profit</Grid>
                        <Grid item xs={6} md={6} sx={{fontSize:"14px",display:"flex",justifyContent: "flex-end", padding:0, color:"#44ce42"}}>
                            <Typography><ArrowUpwardIcon sx={{fontSize:"14px"}}/>2.95</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <Typography variant={"h5"} sx={{color:"black", fontSize:"20px"}}>$ 92556</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true,
                                },
                            ]}
                            width={230}
                            height={200}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <BarChart
                        dataset={dataset}
                        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[
                            { dataKey: 'london', label: 'London', valueFormatter },
                            { dataKey: 'paris', label: 'Paris', valueFormatter },
                            { dataKey: 'newYork', label: 'New York', valueFormatter },
                            { dataKey: 'seoul', label: 'Seoul', valueFormatter },
                        ]}
                        {...chartSetting}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ backgroundColor: "white", mt: "20px" }}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    Copyright @ bootstrapdash.com 2020
                </Grid>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    }}
                >
                    Free Bootstrap dashboard templates from Bootstrapdash.com
                </Grid>
            </Grid>
      </Box>
    </Box>
  );
}