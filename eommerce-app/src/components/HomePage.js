import { Button } from '@mui/material';
import React from 'react'
import Logo from '../img/logo.png';
import '../home.css';

export default function HomePage() {
    return (
        <div className="home">
            <img src={Logo} width="60%"/>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </div>
    )
}
