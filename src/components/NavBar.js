import React from 'react';
import { Typography,  AppBar, Toolbar } from '@mui/material';
import { Pets } from '@mui/icons-material';

export default function NavBar() {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Pets sx={{ mr: 2}} />
                <Typography variant='h6'>Cat Species Gallery</Typography>
            </Toolbar>
        </AppBar>
    )
}
