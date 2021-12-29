import React from 'react'
import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function UserToolBar() {

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link target="_blank" color="inherit" href="https://esen.tn" color="inherit" underline='hover'>
              [ESEN]
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    const profStyle ={
        backgroundColor:'rgba(95, 95, 95, 0.2)',
        color:'black',
        
    };
    const container ={
        borderRight: '1.5px solid gray',
        position: 'fixed',
        width:300,
        height :1000,
        
    };
    const tools ={
        color:'#181818',
    }

    const footer= {
        width: '27%',
        height: 50,
        position: 'fixed', //Here is the trick
        bottom: 0, //Here is the trick
    };

    return (
        <div style={container}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 10, mb: 5 }}
              style={profStyle}
            >
            <Avatar sx={{ m: 1, bgcolor: 'rgba(255, 220, 0)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <b>  First Name    Last Name</b>
            </Button>
            <Button 
                variant="text"
                fullWidth
                sx={{ mt: 10, mb: 0 }}
                style={tools}
            >
                <b>My Notes</b>
            </Button>
            <Button 
                variant="text"
                fullWidth
                sx={{ mt: 3, mb: 0 }}
                style={tools}
            >
               <b>To Do</b>
            </Button>
            <Button 
                variant="text"
                fullWidth
                sx={{ mt: 3, mb: 0 }}
                style={tools}
            >
                <b>Profile</b>
            </Button>
            <Button 
                variant="text"
                fullWidth
                sx={{ mt: 3, mb: 0 }}
                style={tools}
            >
                <b>Settings</b>
            </Button>
            <div style={footer}>
                <Copyright/>
            </div>
        </div>
    )
}
