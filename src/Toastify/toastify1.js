import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "@mui/material";
const MyToastify=()=>{
    const toastifyHandle=()=>{
        toast("Wow so easy",{
            position:"top-center"
        })
        toast.info("success",{
            position:"top-left"
        })
        toast.success('warning',{
            position:"bottom-left"
        })
        toast.warn('error',{
            position:"bottom-right"
        })
        toast.error('info',{
            postion:"bottom-center"
        })
    }
    return(
        <>
            <Button onClick={toastifyHandle} variant="contained">Click here</Button>
            <ToastContainer/>
        </>
    )
}
export default MyToastify;