import React from 'react';
import '../CSS/member.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Grid from '@mui/material/Grid';
import UserToolBar from '../components/UserToolBar';


export default function Member() {
    return (
            <div className='memberbg'>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <div className="userToolBox">
                        <UserToolBar/>
                        </div>
                    </Grid>
                        <h1>this is member page where notes are to be displayed.</h1>
                </Grid>
            </div>
    )
}
