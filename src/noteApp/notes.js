import React,{useState} from "react";
import {Box,TextField,Button,Card,CardContent} from "@mui/material"
const Note=()=>{
    const [notes,setNotes]=useState([]);
    const [newNote,setNewNote]=useState("");

    const addNote=()=>{
        if(newNote.trim() !==""){
            setNotes([...notes,newNote]);
            setNewNote("");
        }
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
                <div style>
                    {notes.map((note,index)=>(
                        <Card 
                            key={index} 
                            style={{width:300,height:200,backgroundColor:"pink" ,marginTop:10}}>
                            <CardContent>{note}</CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </>
    )
}
export default Note;