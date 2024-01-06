// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Grid from "@mui/material/Grid";
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// import SearchIcon from '@mui/icons-material/Search';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import PersonIcon from '@mui/icons-material/Person';
// import { Button} from '@mui/material';

// export default function NavBar() {
//   return (
//     <Box sx={{ flexGrow: 1, width: "100vw", height: "100%" }}>
//       <AppBar position="static" sx={{ background: "black", }}>
//         <Toolbar>
//           <Box
//             sx={{
//               flexGrow:1,
//               textAlign: 'center',
//               justifyContent: 'center',
//               margin: "auto",
//               marginTop: { xs: "20px", sm: "60px" }, // Corrected marginTop for different breakpoints
//               marginBottom: "10px",
//             }}
//           >
//             <Typography variant="h3" sx={{ display: "inline-block", fontFamily: 'monospace' }}>
//               Food
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               RECIPES
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               POPULAR
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               MEAT & SEAFOOD
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               HEALTHY & DIET
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               HOLIDAYS
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               CUISINE
//             </Typography>
//             <Typography display="inline-block" sx={{ marginX: 2 }}>
//               SEASONAL
//             </Typography>
//           </Box>
//           <Box sx={{ marginTop: "50px" }}>
//             <IconButton color="inherit">
//               <SearchIcon />
//             </IconButton>
//             <IconButton color="inherit">
//               <BookmarkBorderIcon />
//             </IconButton>
//             <IconButton color="inherit">
//               <PersonIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="main" sx={{ flexGrow: 1,p:3}}>
//           <Box
//               sx={{
//                   padding: 4,
//                   paddingTop: 4,
//                   paddingBottom: 4,
//                   border: "2px solid red",
//                   margin: "auto",
//                   width: "100%",
//                   maxWidth: "1216px",
//                   color: "#2f2f2f",
//                 }}
//           >
//               <Typography display="inline-block" sx={{ marginX: 2 }}>
//                   RECIPES
//               </Typography>
//               <Typography display="inline-block" sx={{ marginX: 2 }}>
//                   POPULAR
//               </Typography>
//               <Typography display="inline-block" sx={{ marginX: 2 }}>
//                   MEAT & SEAFOOD
//               </Typography>
//               <Typography display="inline-block" sx={{ marginX: 2 }}>
//                   HEALTHY & DIET
//               </Typography>
//           </Box>
//       </Box>
//       <Box sx={{height:"240px",border:"0px solid blue",maxWidth:"100%"}}>
//           <img  
//               src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_5:2/foodcom/images/78307f89-c766-497b-9135-b0b4d98fbfb8.jpg" 
//               alt="img1"
//               style={{ width: '100%', height: '240px' }}
//           />       
//       </Box>
//       <Box sx={{
//           maxWidth:"1216px",
//           height:"144px",
//           border:"2px solid red",
//           margin:"auto",
//           marginTop:{xs:"20px",sm:"40px"},
//           marginBottom:{xs:"20px",sm:"40px"},
//         }}
//       >
//           <Typography variant="h3" sx={{fontSize:{xs: "32px", sm: "48px"}}}>ONE-POT RECIPES</Typography>
//           <Typography sx={{pt:2,fontSize:{ xs: "14px", sm: "16px" },color: "#2f2f2f"}}>Satisfy your comfort food cravings width one-pot recipes including pressure cooker meals, skillet</Typography>
//           <Typography sx={{fontSize:{ xs: "14px", sm: "16px" },color: "#2f2f2f"}}>Creations and potluck favorites</Typography>
//       </Box>
//       <Box sx={{border:"2px solid red",margin:"auto",maxWidth:"1216px",height:"684px",position:"relative"}}>
//           <img
//               src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/76/83/9/B1WiESDnTXyoq5jSXMtp_beef-noodle-soup-01484.jpg"
//               alt="img2"
//               style={{width:"100%",height:"684px"}}
//           />
//           <Box sx={{
//                   position:"absolute",
//                   top:"30%",
//                   left:"5%",
//                   color:"white",
//                   border:"2px solid red",
//               }}
//           >
//               <Typography varint="h4" sx={{fontSize:{sm:"48px",xs:"20px"}}}>69 SATISFYING SOUP</Typography>
//               <Typography varint="h4" sx={{fontSize:{sm:"48px",xs:"20px"}}}>RECIPES FOR COLD</Typography>
//               <Typography varint="h4" sx={{fontSize:{sm:"48px",xs:"20px"}}}>WEATHER</Typography>
//               <Button style={{background:"yellow",fontSize:{sm:"16px",xs:"5px"}}}>SEE THEM ALL</Button>
//           </Box>
//       </Box>
//       <Box sx={{
//           maxWidth:"1216px",
//           height:"146px",
//           border:"2px solid red",
//           margin:"auto",
//           marginTop:{xs:"20px",sm:"40px"},
//           background:" #f2f2f2",
//           }}
//       >
//           <Box sx={{
//               maxWidth:"1216px", 
//               height:"90px",
//               border:"1px solid blue",
//               mt:{xs:"20px",sm:"0"},
//             }}
//           >
//               <Box sx={{
//                   maxWidth:{sm:"728px",xs:"90%"},
//                   height:"90px",
//                   margin:"auto",
//                   border:"2px solid red"
//                   }}
//               >
//                   <img src="https://s0.2mdn.net/simgad/7212650976413695162" alt="img3" style={{width:"100%",height:"90px"}}/>
//               </Box>
//           </Box>
//           <Box sx={{
//               maxWidth:"1216px", 
//               height:"24px",
//               border:"1px solid blue",
//               display:"flex",
//               justifyContent:"center",
//               alignItems:"center"
//               }}
//           >
//               <Typography sx={{fontSize:{sm:"10px",xs:"5px"},color:"#6e6e6e"}}>ADVERTISEMENT</Typography>
//           </Box>
//       </Box>
//       <Box sx={{
//           maxWidth:"1216px",
//           height:"40px",
//           border:"2px solid blue",
//           margin:"auto",
//           marginTop:{xs:"20px",sm:"40px"},
//           }}
//         >
//             <Typography variant="h2" sx={{fontSize:{sm:"38px",xs:"19px"}}}>COZY CUISINE</Typography>
//       </Box>
//           <Box container spacing={2} justifyContent="space-between" sx={{ display:"flex",maxWidth: "1216px", height: "400px", margin: "auto", border: "2px solid red", marginTop: { xs: "20px", sm: "40px" } }}>
//             <Box sx={{ border: "2px solid red",maxWidth:"384px", height:"400px",borderRadius: "4px"}}>
//               <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/15/34/4/MmMWYjxcQQ62wMmzbLgs_april%20posts-9.jpg"
//                 alt="grid1img"
//                 style={{ width: "100%", height: "384px" }}
//               />

//             </Box>
//             <Box sx={{ border: "2px solid red",maxWidth:"384px", height:"400px",borderRadius: "4px"}}>
//               <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/50/54/91/sBOSxKBrTS6GAy8GUlXw_meatballs%2520(2%2520of%25204).jpg"
//                 alt="grid2img"
//                 style={{ width: "100%",height: "384px"}}
//               />
              
//             </Box>
//             <Box sx={{ border: "2px solid red",maxWidth:"384px", height:"400px",borderRadius: "4px"}}>
//               <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_4:3/v1/img/recipes/90/56/6/EdScrTDOQZOaY7yXPaH2_DSC04473-2.jpg"
//                 alt="grid3img"
//                 style={{ width: "100%", height: "384px" }}
//               />
//             </Box>
//           </Box>
          
//     </Box>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1,minWidth: '99vw', minHeight:'100vh'}}>
      <AppBar position="static" sx={{ background: "black" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              justifyContent: 'center',
              margin: "auto",
              marginTop: { xs: "20px", sm: "60px" },
              marginBottom: "10px",
            }}
          >
              <Typography variant="h3" sx={{ display: "inline-block", fontFamily: 'monospace' }}>
                  Food
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  RECIPES
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  POPULAR
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  MEAT & SEAFOOD
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  HEALTHY & DIET
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  HOLIDAYS
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  CUISINE
              </Typography>
              <Typography display="inline-block" sx={{ marginX: 2 }}>
                  SEASONAL
              </Typography>
          </Box>
          <Box sx={{ marginTop: "50px" }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <BookmarkBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            padding: 4,
            paddingTop: 4,
            paddingBottom: 4,
            border: "2px solid red",
            margin: "auto",
            width: "100%",
            maxWidth: "1216px",
            color: "#2f2f2f",
          }}
        >
          <Typography display="inline-block" sx={{ marginX: 2 }}>
            RECIPES
          </Typography>
          <Typography display="inline-block" sx={{ marginX: 2 }}>
            POPULAR
          </Typography>
          <Typography display="inline-block" sx={{ marginX: 2 }}>
            MEAT & SEAFOOD
          </Typography>
          <Typography display="inline-block" sx={{ marginX: 2 }}>
            HEALTHY & DIET
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "240px", border: "0px solid blue", maxWidth: "100%" }}>
        <img
          src="https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_5:2/foodcom/images/78307f89-c766-497b-9135-b0b4d98fbfb8.jpg"
          alt="img1"
          style={{ width: '100%', height: '240px' }}
        />
      </Box>
      <Box sx={{
        maxWidth: "1216px",
        height: "144px",
        border: "2px solid red",
        margin: "auto",
        marginTop: { xs: "20px", sm: "40px" },
        marginBottom: { xs: "20px", sm: "40px" },
      }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: "32px", sm: "48px" } }}>ONE-POT RECIPES</Typography>
        <Typography sx={{ pt: 2, fontSize: { xs: "14px", sm: "16px" }, color: "#2f2f2f" }}>Satisfy your comfort food cravings width one-pot recipes including pressure cooker meals, skillet</Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#2f2f2f" }}>Creations and potluck favorites</Typography>
      </Box>
      <Box sx={{ border: "2px solid red", margin: "auto", maxWidth: "1216px", height: "684px", position: "relative" }}>
        <img
          src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/76/83/9/B1WiESDnTXyoq5jSXMtp_beef-noodle-soup-01484.jpg"
          alt="img2"
          style={{ width: "100%", height: "684px" }}
        />
        <Box sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          color: "white",
          border: "2px solid red",
        }}
        >
          <Typography variant="h4" sx={{ fontSize: { sm: "48px", xs: "20px" } }}>69 SATISFYING SOUP</Typography>
          <Typography variant="h4" sx={{ fontSize: { sm: "48px", xs: "20px" } }}>RECIPES FOR COLD</Typography>
          <Typography variant="h4" sx={{ fontSize: { sm: "48px", xs: "20px" } }}>WEATHER</Typography>
          <Button style={{ background: "yellow", fontSize: { sm: "16px", xs: "5px" } }}>SEE THEM ALL</Button>
        </Box>
      </Box>
      <Box sx={{
        maxWidth: "1216px",
        height: "146px",
        border: "2px solid red",
        margin: "auto",
        marginTop: { xs: "20px", sm: "40px" },
        background: " #f2f2f2",
      }}
      >
        <Box sx={{
          maxWidth: "1216px",
          height: "90px",
          border: "1px solid blue",
          mt: { xs: "20px", sm: "0" },
        }}
        >
          <Box sx={{
            maxWidth: { sm: "728px", xs: "90%" },
            height: "90px",
            margin: "auto",
            border: "2px solid red"
          }}
          >
            <img src="https://s0.2mdn.net/simgad/7212650976413695162" alt="img3" style={{ width: "100%", height: "90px" }} />
          </Box>
        </Box>
        <Box sx={{
          maxWidth: "1216px",
          height: "24px",
          border: "1px solid blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <Typography sx={{ fontSize: { sm: "10px", xs: "5px" }, color: "#6e6e6e" }}>ADVERTISEMENT</Typography>
        </Box>
      </Box>
      <Box sx={{
        maxWidth: "1216px",
        height: "40px",
        border: "2px solid blue",
        margin: "auto",
        marginTop: { xs: "20px", sm: "40px" },
      }}
      >
        <Typography variant="h2" sx={{ fontSize: { sm: "38px", xs: "19px" } }}>COZY CUISINE</Typography>
      </Box>
      <Grid
          container
          sx={{
            display: "flex",
            maxWidth: "1216px",
            margin: "auto",
            border: "2px solid red",
            marginTop: { xs: "20px", sm: "40px" },
          }}
      >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              border: '2px solid red',
              borderRadius: '4px',
              position: "relative",
            }}
          >
            <img
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/15/34/4/MmMWYjxcQQ62wMmzbLgs_april%20posts-9.jpg"
              alt="grid1img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "75%",
                left: "5%",
                color: "white",
                border: "2px solid red",
              }}
            >
              <Typography varint="h6" sx={{ fontSize: { xs: "10px", sm: "12px" } }}>COLLECTION</Typography>
              <Typography variant="h4" sx={{ fontSize: { xs: "10px", sm: "32px" } }}>SKILLET DINNERS</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              border: '2px solid red',
              borderRadius: '4px',
              position: "relative",
            }}
          >
              <img
                src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/50/54/91/sBOSxKBrTS6GAy8GUlXw_meatballs%2520(2%2520of%25204).jpg"
                alt="grid2img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "75%",
                  left: "5%",
                  color: "white",
                  border: "2px solid red",
                }}
              >
                  <Typography varint="h6" sx={{ fontSize: { xs: "10px", sm: "12px" } }}>COLLECTION</Typography>
                  <Typography variant="h5" sx={{ fontSize: { xs: "10px", sm: "32px" } }}>TOP POTLUCK</Typography>
                  <Typography variant="h5" sx={{ fontSize: { xs: "10px", sm: "32px" } }}>RECIPES</Typography>
              </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              border: '2px solid red',
              borderRadius: '4px',
              position: "relative",
            }}
          >
            <img
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_4:3/v1/img/recipes/90/56/6/EdScrTDOQZOaY7yXPaH2_DSC04473-2.jpg"
              alt="grid3img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "75%",
                left: "5%",
                color: "white",
                border: "2px solid red",
              }}
            >
              <Typography varint="h6" sx={{ fontSize: { xs: "10px", sm: "12px" } }}>COLLECTION</Typography>
              <Typography variant="h5" sx={{ fontSize: { xs: "10px", sm: "32px" } }}>LUXURIOUS</Typography>
              <Typography variant="h5" sx={{ fontSize: { xs: "10px", sm: "32px" } }}>LASAGNAS</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth:"1216px",height:"454px",border:"2px solid red",m:"auto",marginTop: { xs: "20px", sm: "40px" }}}>
          <Grid item ld={8} md={8} sm={12} xs={12} sx={{border:"2px solid green"}}>
                <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/31/64/18/qnIvCFTjSpilnaebYGYS_DSC03923-2.jpg" alt="2Gridimg1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </Grid>
          <Grid item ld={4} md={4} sm={6} xs={12} p={12} sx={{border:"2px solid black"}}>
                <Grid item>
                    <Typography varint="h6" sx={{fontSize:"12px"}}>COLLECTION</Typography>
                </Grid>
                <Grid item sx={{mt:'10px'}}>
                    <Typography variant="h4" sx={{ fontSize: { sm: "26px", xs: "10px" } }}>27 EASIEST-EVER</Typography>
                    <Typography variant="h4" sx={{ fontSize: { sm: "26px", xs: "10px" } }}>PRESSURE COOKER</Typography>
                    <Typography variant="h4" sx={{ fontSize: { sm: "26px", xs: "10px" } }}>RECIPES</Typography>
                </Grid>
                <Grid item sx={{mt:'20px',border:"2px solid red"}}>
                    <Typography variant="p" sx={{ fontSize: { sm: "13px", xs: "5px",color: "#2f2f2f"}}}>It's time to ditch your weeknight dinner</Typography>
                    <Typography variant="p" sx={{ fontSize: { sm: "13px", xs: "5px",color: "#2f2f2f"}}}>woes and put your pressure coker to</Typography>
                    <Typography variant="p" sx={{ fontSize: { sm: "13px", xs: "5px",color: "#2f2f2f"}}}>work</Typography>
                </Grid>
          </Grid>
        </Grid>
        <Box sx={{
            maxWidth: "1216px",
            height: "40px",
            border: "2px solid blue",
            margin: "auto",
            marginTop: { xs: "20px", sm: "40px" },
          }}
        >
            <Typography variant="h2" sx={{ fontSize: { sm: "38px", xs: "10px" } }}>FAN FAVES</Typography>
        </Box>
        
       <Grid container spacing={2} sx={{ maxWidth: "1216px", height: "291px", margin: "auto", marginTop: { xs: "20px", sm: "40px" }, border: "2px solid black" }}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Box sx={{ height: "100%", border: '2px solid red' }}>
            <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/19/04/64/9Rsm3El3TfuXYwhzH5dK_Moms%2520beef%2520stew%2520SITE-3.jpg" 
                alt="3grid1Img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </Box>
      </Grid>
      <Grid item xs={12} sm={2} md={3} lg={3}>
        <Box sx={{ height: "100%", border: '2px solid red' }}>
            <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/26/72/7/WEj7ZM4RzmzF9yWVDE8f_0S9A3808.jpg" 
                alt="3grid2Img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </Box>
      </Grid>
      <Grid item xs={12} sm={2} md={3} lg={3}>
        <Box sx={{ height: "100%", border: '2px solid red' }}>
            <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/42/86/1/m1WFCqhXRE2LD0GQ5N4Z_Food-com-2016-128178.jpg" 
                alt="3grid3Img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Box sx={{ height: "100%", border: '2px solid red' }}>
            <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/98/13/7/lUlJwKBvRYygMYbRRczb_DSC_6558.jpg" 
                alt="3grid4Img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
}
