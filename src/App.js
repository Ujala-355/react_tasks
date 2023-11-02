import './App.css';
import Note from "./noteApp/notes";
import {Typography} from "@mui/material"
function App() {
  return (
    <>
      <div className="App">
          <Typography variant="h3">Notes</Typography>
          <Note/>
      </div>
    </>
  );
}

export default App;
