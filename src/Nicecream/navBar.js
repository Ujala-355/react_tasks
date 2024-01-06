import * as React from 'react';
import {useState} from "react";
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
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/system';
import {Typography} from "@mui/material";

const drawerWidth = 240;
const navItems = ['Order', 'OurShop', 'Events' ,'Apply','Story'];

function DrawerAppBar(props) {
    const theme = useTheme();
    const { window } = props;
    const [isHovered1,setIsHovered1]=useState(false);
    const [isHovered2,setIsHovered2]=useState(false);
    const [isHovered3,setIsHovered3]=useState(false);
    const [isHovered4,setIsHovered4]=useState(false);
    const [isHovered5,setIsHovered5]=useState(false);
    const isSmallScreen=useMediaQuery((theme)=>theme.breakpoints.down('sm'));

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleMouseEnter1=()=>{
        setIsHovered1(true)
    }
    const handleMouseLeave1=()=>{
        setIsHovered1(false)
    }
    const handleMouseEnter2=()=>{
        setIsHovered2(true)
    }
    const handleMouseLeave2=()=>{
        setIsHovered2(false)
    }
    const handleMouseEnter3=()=>{
        setIsHovered3(true)
    }
    const handleMouseLeave3=()=>{
        setIsHovered3(false)
    }
    const handleMouseEnter4=()=>{
        setIsHovered4(true)
    }
    const handleMouseLeave4=()=>{
        setIsHovered4(false)
    }
    const handleMouseEnter5=()=>{
        setIsHovered5(true)
    }
    const handleMouseLeave5=()=>{
        setIsHovered5(false)
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img sx={{ my: 2 }}
                src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/2de8e024-8744-4f47-8e3e-1f8fdf91953e/Nicecream_Logo_PosCoated-01+%281%29.png?format=1500w"
                alt="img1"
            />
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' ,}}>
                    <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor:"white",p:4}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <img
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                }}
                style={{
                    maxWidth: "316px",
                    height: "116px",
                }}
                src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/2de8e024-8744-4f47-8e3e-1f8fdf91953e/Nicecream_Logo_PosCoated-01+%281%29.png?format=1500w"
                alt="img1"
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                <Button key={item} sx={{ color: 'black',}}>
                    {item}
                </Button>
                ))}
                <IconButton>
                    <FacebookIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
            </Box>
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
        <Box component="main" sx={{ p:3}}>
            <Toolbar />
            <Box style={{
                position:"absolute",
                top:0,
                right:0,
                bottom:0,
                left:0,
                height:"977px",
            }}>
                <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/0b9fb028-288e-4d2a-b5a3-b3b4e940af93/32281796347_273f6a0fc8_o+%281%29.jpg?format=2500w"
                    alt="img2"
                    style={{height:"977px",minWidth:"100%",opacity: 0.7}}
                />
                <Box sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      maxWidth:"900px",
                      transform:"translate(-50%,-50%)",
                      color: "black",
                      wordWrap: "break-word",
                    }}
                >
                    <Typography varint="h6" sx={{ fontSize: { xs: "30px", sm: "75px" },textAlign:"center",color:"#484955", }}>Fresh ice cream with handcrafted ingredients</Typography>
                    <Box sx={{
                        maxWidth: isSmallScreen? "100%" :"900px",
                        height:"90px",
                        display:"flex",
                        justifyContent:"center",
                        mt:"20px"
                        }}
                    >
                        <Box sx={
                            {width:"156px",
                            height:"90px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            textAlign:"center",
                            border:"3px solid black",
                            backgroundColor: isHovered1 ? "black" : "transparent",
                            color: isHovered1 ? "white" : "black",
                            }}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <Typography>Order</Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{
                        maxWidth:isSmallScreen ?"100%":"900px",
                        height:"90px",
                        display:"flex",
                        justifyContent:"center",
                        mt:"30px"
                        }}
                    >
                        <Box sx={{
                            width:"156px",
                            height:"90px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            textAlign:"center",
                            border:"3px solid black",
                            backgroundColor: isHovered2 ? "black" : "transparent",
                            color: isHovered2 ? "white" : "black",
                            }}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <Typography>Events</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    minWidth:"100%",
                    height:"202px",
                    mt:"40px",
                    }}
                >
                    <Box sx={{
                        maxWidth:"1211px",
                        height:"202px",
                        margin:"auto",
                        }}
                    >
                        <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/19514201-5dfe-46ec-b58a-65c53767915a/Gray+and+black+minimalist+Twitter+Header.png?format=2500w"
                            alt="img3"
                            style={{width:"100%",height:"100%"}}
                        />
                    </Box>
                </Box>
                <Box sx={{
                    height:"992px", 
                    minWidth:"100%",
                    mt:"40px",
                    backgroundColor: "#7FD7CB",
                    }}
                >
                    <Box sx={{
                        maxWidth:"900px",
                        height:"380px",
                        margin:"auto",
                        mt:"5%",
                        }}
                    >
                        <Box sx={{maxWidth:"900px",height:"259px",wordWrap: "break-word"}}>
                            <Typography sx={{fontSize:{ xs: "12px",sm: "20px",md: "26px",ld:"26px"}}}>
                                Our little ice cream shop is located in a beautiful neighborhood of Arlington, Virginia. We are a short drive from Washington DC, and only a few hours
                                from some of Virginia's best fruit farms and pennsylvania's incredible dairy
                                farms, where we source most of our ingredients from. We take those fresh 
                                ingredients and handcraft ice cream right here on the spot, using liquid
                                nitrogen.
                            </Typography>
                        </Box>
                        <Box sx={{maxWidth:"900",height:"86px",m:"18px 0px 0px",whiteSpace: "pre-wrap",textAlign:"center"}}>
                            <Typography sx={{fontSize:{ xs: "12px",sm: "15px",md: "26px",},pl:"10px"}}>We're open 7 days a week. We rotate our flavors weekly depending on the season.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        maxWidth:"248px",
                        height:"90px",
                        border:"3px solid black",
                        margin:"auto",
                        mt:"40px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor: isHovered3 ? "black" : "transparent",
                        color: isHovered3 ? "white" : "black",
                        }}
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                    >
                        <Typography sx={{fontSize:"23px"}}>Visit Our Store</Typography>

                    </Box>
                    <Box sx={{
                        maxWidth:"150px", 
                        height:"90px",
                        border:"3px solid black",
                        margin:"auto",
                        mt:"40px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor: isHovered4 ? "black" : "transparent",
                        color: isHovered4 ? "white" : "black",
                        }}
                        onMouseEnter={handleMouseEnter4}
                        onMouseLeave={handleMouseLeave4}
                    >
                        <Typography sx={{fontSize:"23px"}}>FAQs</Typography>
                    </Box>
                    <Box sx={{
                        maxWidth:"168px", 
                        height:"90px",
                        border:"3px solid black",
                        margin:"auto",
                        mt:"40px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor: isHovered5 ? "black" : "transparent",
                        color: isHovered5 ? "white" : "black",
                        }}
                        onMouseEnter={handleMouseEnter5}
                        onMouseLeave={handleMouseLeave5}
                    >
                        <Typography sx={{fontSize:"23px"}}>Events</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    height:"1058px",
                    mt:"60px",
                    mb:"60px",
                }}
                >
                    <Box sx={{
                        maxWidth:"1000px",
                        height:"851px",
                        margin:"auto"
                        }}
                    >
                        <Box sx={{
                            maxWidth:"800px",
                            height:"206px",
                            m:"auto",
                            lineHeight: 1,
                            }}
                        >
                            <Typography variant="h4" sx={{fontSize:{md:"183px",xs:"50px",sm:"100px"},whiteSpace: "nowrap !important",wordWrap: "break-word",}}>Our Story</Typography>
                        </Box>
                        <Box sx={{maxWidth:"1000px",height:"565px"}}>
                            <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/9502ebe3-d435-45d5-9b90-a153403415ef/48407235202_51cd004882_k.jpg?format=2500w"
                                alt="img4"
                                style={{width:"100%",height:"565px"}}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height:"1712px",
                    width:"100%",
                    }}
                >
                    <Box sx={{
                        width:"1200px",
                        height:"1450px",
                        }}
                    >
                        <Box sx={{maxWidth:"840px",height:"1260px",position:"relative" }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/9dffb47f-7806-44be-9988-0dc12df200b2/47647091702_0a313d05dc_o.jpg?format=2500w" 
                                alt="img5"
                                style={{width:"100%",height:"1260px"}} 
                            />
                            <Box sx={{
                                width:"480px",
                                height:"741px",
                                position:"absolute",
                                top: "50%",
                                left: "114%",
                                transform:"translate(-50%,-50%)",
                                background:"#E0E2ED",
                                }}
                            >
                                <Box sx={{
                                    maxWidth:"322px", 
                                    height:"198px",
                                    margin:"auto",
                                    mt:"10px"
                                    }}
                                >
                                    <Typography  sx={{
                                        fontSize:{sm:"51px",xs:"26px"},
                                        fontFamily: 'Sawar Display, sans-serif',
                                        lineHeight:"70px",
                                        }}
                                    >
                                        let us be the cherry on top of your event.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    maxWidth:"360px", 
                                    height:"198px",
                                    margin:"auto",
                                    mt:"40px"
                                    }}
                                >
                                    <Typography  sx={{
                                        fontSize:{sm:"21px",xs:"10px"},
                                        fontFamily: 'Sawar Display, sans-serif',
                                        }}
                                    >
                                        Looking for something extra special? <strong>We cater.</strong>From A-list celebrity's
                                        weddings t corporate parties to backyard BBQs, we love being a part of your celebrations!

                                    </Typography>
                                </Box>
                                <Box sx={{
                                    maxWidth:"360px", 
                                    height:"198px",
                                    margin:"auto",
                                    }}
                                >
                                    <Typography  sx={{
                                        fontSize:{sm:"21px",xs:"10px"},
                                        fontFamily: 'Sawar Display, sans-serif',
                                        }}
                                    >
                                        We bring our amazing team, fresh ingredients, and of course-liquid nigredients, 
                                        and f course-liquid nitrogen-to handcraft ice cream in front of your guests.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    maxWidth:"360px", 
                                    height:"69px",
                                    margin:"auto",
                                    }}
                                >
                                    <Typography  sx={{
                                        fontSize:{sm:"21px",xs:"10px"},
                                        fontFamily: 'Sawar Display, sans-serif',
                                        }}
                                    >
                                        Working remote? We can host your <span style={{textDecoration:"underline"}}>virtual event,</span>too!
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                                maxWidth:"422px", 
                                height:"158px", 
                                border:"5px solid black",
                                borderRadius:"300px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                textAlign:"center",
                                margin: "auto",
                                mt:"10px",
                                }}
                        >
                            <Typography sx={{fontSize:{sm:"21px",xs:"10px"},}}>learn more</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                        height:"615px", 
                    }}>
                        <Box sx={{
                            maxWidth:"1200px",
                            height:"225px",
                            margin:"auto"
                            }}
                        >
                            <Box sx={{
                                maxWidth:"1200px",
                                height:"71px",
                                }}
                            >
                                <Typography sx={{
                                    fontSize:{ld:"50px",md:"50px",sm:"25px",xs:"20px"},
                                    lineHeight:{sm:"30px",xs:"20px"},
                                    fontFamily: 'Sawar Display, sans-serif',
                                    fontWeight: 700,
                                    }}
                                >
                                    <strong>We're passionate about incredible ingredients</strong>
                                </Typography>
                            </Box>
                            <Box sx={{
                                maxWidth:"1200px",
                                height:"126px",
                                }}
                            >
                                <Typography sx={{
                                    fontSize:{md:"55px",sm:"30px",xs:"27px"},
                                    lineHeight:{sm:"60px",xs:"20px"},
                                    fontFamily: 'Sawar Display, sans-serif',
                                    color:"#484955"
                                    }}
                                >
                                    With skilled hands and a lot of time, we create exceptional ice cream.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            maxWidth:"1200px",
                            height:"365px",
                            margin:"auto",
                            display: "flex",
                            justifyContent:"space-between"
                            }}
                        >
                            <Box sx={{
                            maxWidth:"695px",
                            height:"294px",
                            }}
                            >
                                <Typography sx={{
                                    fontSize:{sm:"21px",xs:"10px"},
                                    fontFamily: 'Sawar Display, sans-serif',
                                    color:"#484955"
                                    }}
                                >
                                    We source blueberries from a family farm in hammonton, New Jersey. 
                                    Our lavender is from an hour away in Dumfries, Virginia and honey 
                                    from the neighbor down the street. We takemint leaves and infuse the whole 
                                    leaf straight into our cream for the freshest flavor. Entire pistachios are
                                    ground into a nut butter to preserve every ounce of its nutty taste. We hand 
                                    zest and juice each lemon for our Lemony jenny.A lot of love. A lot of care Exceptional ingreddients.
                                </Typography>
                                <Typography style={{textDecoration:"underline",}}>
                                    <strong>Learn more about our story</strong>
                                </Typography>

                            </Box>
                            <Box sx={{width:"443px", height:"365px"}}>
                                <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/1b8d850c-8950-410b-8741-2836ea66baf8/Blueberry+Ice+Cream?format=2500w"
                                    alt="img5"
                                    style={{minWidth:"100%",height:"365px"}}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width:"1825",
                        height:"751px",
                        position:"relative"
                        }}
                    >
                        <img src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/d294cd8a-50c7-479c-870e-82189461e60f/28699884657_152623dbc4_3k.jpg?format=2500w"
                            alt="img6"
                            style={{width:"100%",height:"751px"}}
                        />
                        <Box sx={{
                            maxWidth:"838px",
                            height:"134px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform:"translate(-50%,-50%)"
                            }}
                        >
                            <Typography sx={{
                                    fontSize:{md:"55px",sm:"30px",xs:"27px"},
                                    lineHeight:{sm:"60px",xs:"20px"},
                                    fontFamily: 'Sawar Display, sans-serif',
                                    color:"white",
                                    wordWrap: "break-word",
                                    }}
                                >
                                    crafted fresh on the spot with liquid nitrogen
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                    sx={{
                        height: "auto",
                        mt: "20px",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                    }}
                    >
                    <Box>
                        <img
                        src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/66620207-00bb-42bd-8754-1e9f28d3184f/52200619006_1b72e1dcb3_h.jpg?format=2500w"
                        alt="img7"
                        style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                    <Box mt={{ xs: "10%", sm:"8%" }} width={{ xs: "100%", sm: "45%" }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                p:{ xs: 2, sm: 3 },
                            }}
                        >
                            <Box sx={{ width: "100%", height: "auto",}}>
                                <Typography sx={{ fontSize: { xs: "20px", sm: "48px" } }}>Love free ice cream?</Typography>
                            </Box>
                            <Box sx={{ width: "100%", height: "auto",mt: 2 }}>
                                <Typography sx={{ fontSize: { xs: "10px", sm: "21px", textAlign: "center" } }}>
                                <strong>The answer is yes.</strong>
                                </Typography>
                                <Typography sx={{ fontSize: { xs: "10px", sm: "21px" }, mt: 1 }}>
                                Sign up for our newsletter and be the first to know about free treats and other fun promos.
                                </Typography>
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                display: "flex",
                                flexDirection: "column",
                                maxWidth: "334px",
                                height: "auto",
                                margin: "auto",
                                p: 3,
                                }}
                            >
                                <TextField variant="outlined" sx={{ p: 2 }} placeholder="First Name" />
                                <TextField variant="outlined" sx={{ p: 2 }} placeholder="Last Name" />
                                <TextField variant="outlined" sx={{ p: 2 }} placeholder="Email Address" />
                                <Box
                                    sx={{
                                        width: "149px",
                                        height: "82px",
                                        mt: "20px",
                                        cursor: "pointer",
                                        border: "5px solid black",
                                        margin: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50px",
                                    }}
                                >
                                <Typography sx={{ fontSize: "20px" }}>Sign Up</Typography>
                                </Box>
                            </Box>
                            </Box>
                        </Box>
                        <Box>
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/6261900ead21001e42f46662/8adf16db-72f3-4401-a2cd-a64cd80a0c11/52200639853_27e00c7c11_h.jpg?format=2500w"
                            alt="img8"
                            style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "auto",
                            backgroundColor: "#7FD7CB",
                            p: 3,
                        }}
                        component="footer"
                        >
                        <Box
                            sx={{
                            maxWidth: "1200px",
                            margin: "auto",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            }}
                        >
                            <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                mb: { xs: 3, sm: 0 },
                            }}
                            >
                            <Typography sx={{ fontSize: { xs: "18px", sm: "21px" } }}>
                                <strong>
                                Nicecream<br />
                                2831 Clarendon Blvd, Arlington, VA 22201
                                </strong>
                                <br />
                                Across from Crate & Barrel on Clarendon Blvd
                            </Typography>
                            </Box>
                            <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                mt: { xs: 3, sm: 0 },
                                ml: { xs: 0, sm: 4 },
                            }}
                            >
                            <Typography sx={{ fontSize: { xs: "14px", sm: "21px" } }}>
                                hello@icecream.com<br />908-0225
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "14px", sm: "21px" }, mt: 3 }}>
                                Our Story
                            </Typography>
                            </Box>
                            <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                mt: { xs: 3, sm: 0 },
                                display: "flex",
                                justifyContent: { xs: "center", sm: "flex-end" },
                            }}
                            >
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box> 
            </Box>
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

