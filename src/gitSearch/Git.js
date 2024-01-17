import React, { useState } from 'react';
import axios from 'axios';
import { Box, 
    Typography, 
    Grid, 
    TextField, 
    Button,
    Card,
    CardContent,
    CardActions,
} from "@mui/material";

function Git() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError('User not found');
    }
  };

  return (
    <>
        <Box sx={{maxWidth:"500px",maxHeight:"550px"}}>
          <Typography variant="h6" sx={{fontSize:{xs:"20px",sm:"50px"},align:"center"}}>GitHub User Search</Typography>
          <Grid  item xs={12} sm={8} md={8}>
              <TextField
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{minWidth:"300px"}}
              />
              <Button variant="contained" onClick={handleSearch} sx={{mt:1,ml:2}}>Search here</Button>
          </Grid>
          {error && <Typography sx={{color: 'red' }}>{error}</Typography>}
          {userData && (
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4">User Information</Typography>
              <Card sx={{minWidth:100,background:"DeepSkyBlue",border:"2px solid pink"}}>
                  <img src={userData.avatar_url} alt={`${username}`} style={{
                      maxWidth:"200px",
                      height:"200px",
                      display:"flex",
                      justifyContent:"cneter",
                      alignItems:"center",
                      margin:"auto",
                      borderRadius:"50%",
                      }}
                  />
                  <Typography variant="h6" align="center">
                      Username:{userData.login}
                  </Typography>
                  <Typography variant="h6" align="center">
                      Followers:{userData.followers}
                  </Typography>
                  <Typography variant="h6" align="center">
                      Public Repositories:{userData.public_repos}
                  </Typography>
                  <Typography variant="h6" align="center">
                      Public Gists:{userData.public_gists}
                  </Typography>
              </Card>
            </Grid>
          )}
        </Box>
    </>
  );
}
export default Git;