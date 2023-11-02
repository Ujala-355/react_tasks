import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const DeleteButton=({onClick})=>{
    return(
        <>
             <DeleteOutlinedIcon 
                onClick={onClick} 
                style={{marginLeft:260,marginTop:100}}
            />
        </>
    )
}
export default DeleteButton;