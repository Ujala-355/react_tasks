import React from 'react';
import { Toolbar, Typography, Box, Grid,styles } from '@mui/material';

export default function Header() {
  const styles = (theme) => ({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.up('lg')]: {
        // backgroundColor: green[500],
      },
    },
  });
  return (
    <root>
    <Toolbar>
      <Box>
        <img src="https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/cfa23454-f3a1-44c6-aba3-6193758d5178/kvg_logo.png?format=1500w" alt="Description of the image" height={100} width={100} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              Artists
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              Exhibitions
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              Marketplace
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              KVG Blog
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              KVG Collections
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              About
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body1" sx={{ marginLeft: 120 }}>
              Cart(0)
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Toolbar>
    </root>
  );
}