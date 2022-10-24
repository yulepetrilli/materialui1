import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import Content from './components/Content';

export default function App() {
    return (
        <>
            <CssBaseline />
            <NavBar />
            <Content />
        </>
    )
}
