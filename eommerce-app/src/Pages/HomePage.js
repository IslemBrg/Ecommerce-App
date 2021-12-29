import { Button } from '@mui/material';
import Logo from '../img/logoYell.png';
import '../CSS/home.css';
import * as React from 'react';
import Link from '@mui/material/Link';
import { useEffect } from 'react';


export default function HomePage() {

    useEffect(() => {
        document.title = "Wri9a"
     }, []);


    return (
        <div className="home">
            <div variant="outlined" className="logo">
            <img src={Logo} width="60%"/>
            </div>
            <div>
                <br/><br/>
            <Link href='/signin' color="inherit" underline="none"><Button variant="contained" >     <b>Sign in</b>     </Button></Link>
                                
                <Link href='/signup' color="inherit" underline="none"><Button variant="contained">     <b>Sign up</b>     </Button></Link>
            </div>
            

        </div>
    )
}
