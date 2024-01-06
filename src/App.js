// Import React at the beginning
// import React from "react";
// import NavBar from "./newUI/NavBar";
// import Footer from "./newUI/footer" 
// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <Footer/>
//     </>
//   );
// };

// export default App;


import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DrawerAppBar from "./Nicecream/navBar";
const theme = createTheme();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
      </ThemeProvider>
    </>
  );
};

export default App;


// import MyPagination from "./pagination"
// const App=()=>{
//   return(
//     <>
//         <MyPagination/>
//     </>
//   )
// }
// export default App;







// import Note from "./noteApp/notes";
// import {Typography} from "@mui/material"
// import EmojiSearch from "./emojiA/emoji"
// function App(){
//   return (
//     <>
//       <div className="App">
//           {/* <Typography variant="h3">Notes</Typography>
//           <Note/> */}
//           <EmojiSearch/>
//       </div>
//     </>
//   );
// }

// export default App;

// import EmojiPicker from 'emoji-picker-react';
// const EmojiSearch=()=>{
//   return(
//     <>
//         <div style={{display:"flex", justifyContent:"center",height:"100vh",marginTop:"20px"}}>
//             <EmojiPicker />
//         </div>
//     </>
//   )
// }
// export default EmojiSearch;


// import ImageUpload from "./ImageCompression/ImageCompression"
// const App=()=>{
//   return(
//     <>
//         <div className="App">
//             {/* <ImageUpload/> */}
//         </div>
//     </>
//   )
// }
// export default App;

// import MyInsetDividers from './mui/insetDividers';
// import VerticalDividers from "./mui/VerticalDivider"

// import Page from "./Routing/page"
// const App=()=>{
//   return(
//     <>
//         <div className="App">
//             {/* <MyInsetDividers/> */}
//             {/* <VerticalDividers/> */}
//             <Page/>
//         </div>
//     </>
//   )
// }
// export default App;

// import PermanentDrawerLeft from "./UI_Project/new";
// import Footer from "./UI_Project/footer";
// import ProductSlider from "./Slider"
// import  Counter from  "./Counter"
// const App=()=>{
  // return(
    // <>
        // <div className="App">
          // <Counter/>
            {/* <PermanentDrawerLeft/> 
             <Footer/> */}
            {/* <ProductSlider/> */}
            {/* <img src="https://img.freepik.com/free-vector/cute-girl-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3977.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702944000&semt=ais" alt="hello"/> */}
        // </div>
    // </>
  // )
// }
// export default App;

// import './App.css';
// import Header from './Component/header';
// import Page from './Component/page';
// import Footer from './Component/footer';
// import Main from './Component/main';
// import ClippedDrawer from "./Component/hello"
// function App() {
//   return (
    // <div className="App">
      {/* <Header/>
      <br></br><br></br>
      <Main/>
      <Page/>
      <Footer/> */}
      
       {/* <ClippedDrawer/>
    </div>
  );
}

export default App; */}

