import { Button } from '@mui/material';
import Logo from '../img/logoYell.png';
import '../CSS/home.css';
import * as React from 'react';
import Link from '@mui/material/Link';


export default function HomePage() {
    return (
        <div className="home">
            <div variant="outlined" className="logo">
            <img src={Logo} width="60%"/>
            </div>
            <div>
            <Link href='/signin' color="inherit" underline="none"><Button variant="contained">Sign in</Button></Link>
                <Link href='/signup' color="inherit" underline="none"><Button variant="contained" >Sign up</Button></Link>
            </div>
            

        </div>
    )
}
