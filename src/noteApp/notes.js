import React,{useState} from "react";
import {Box,TextField,Button,Card,CardContent} from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Note=()=>{
    const [notes,setNotes]=useState([]);
    const [newNote,setNewNote]=useState("");

    const addNote=()=>{
        if(newNote.trim() !==""){
            setNotes([...notes,newNote]);
            setNewNote("");
        }
    }
    const handleDelete=(index)=>{
        const update=[...notes];
        update.splice(index,1);
        setNotes(update);
    }
    return(
        <>
            <Box>
                <TextField 
                    type="text"
                    variant="outlined"
                    value={newNote}
                    onChange={(e)=>setNewNote(e.target.value)}
                />
                <Button onClick={addNote} style={{width:60, height:40, marginLeft:10, marginTop:10}} variant="contained">Add</Button>
                <div>
                    {notes.map((note,index)=>(
                        <Card 
                            key={index} 
                            style={{width:300,height:200,backgroundColor:"pink" ,marginTop:10}}>
                            <CardContent>{note}</CardContent>
                            <DeleteOutlinedIcon onClick={()=>handleDelete(index)} />
                        </Card>
                        
                    ))}
                    
                </div>
            </Box>
        </>
    )
}
export default Note;