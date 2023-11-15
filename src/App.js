import './App.css';
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


import ImageUpload from "./ImageCompression/ImageCompression"
const App=()=>{
  return(
    <>
        <div className="App">
            <ImageUpload/>
        </div>
    </>
  )
}
export default App;