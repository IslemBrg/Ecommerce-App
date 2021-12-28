import { Button } from '@mui/material';
import Logo from '../img/logoYell.png';
import '../CSS/home.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function HomePage() {
    return (
        <div className="home">
            <div variant="outlined" className="logo">
            <img src={Logo} width="60%"/>
            </div>
            <div>
            <Button variant="contained">Sign in</Button>
            <Button variant="contained">Sign up</Button>
            </div>
            

        </div>
    )
}
