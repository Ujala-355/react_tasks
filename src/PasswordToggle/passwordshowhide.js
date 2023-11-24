// import React, { useState } from "react";
// import IconButton from '@material-ui/core/IconButton';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// const MyPasswordToggle = () => {
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleToggle = () => {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <>
//       <div>
//         <label>Password</label>
//         <input 
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleToggle}
//               >
//                 {showPassword ? <Visibility /> : <VisibilityOff />}
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//       </div>
//     </>
//   );
// }

// export default MyPasswordToggle;


import React,{useState} from "react";
import {TextField,IconButton,InputAdornment} from "@material-ui/core";
import {Visibility,VisibilityOff} from "@material-ui/icons";

const MyPasswordToggle=()=>{
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(0);
    const handleToggle=()=>{
        setShowPassword(!showPassword)
    }
    return(
        <>
            <lable>Password</lable>
            <TextField
                type={showPassword? "text":"password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handleToggle} edge="end">
                                {showPassword?<Visibility/>:<VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </>
    )
}
export default MyPasswordToggle;