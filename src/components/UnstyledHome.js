import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    return (
        <div >
                       <img alt="cicada with outstreched wings and the name Cicada Collective above it"src="https://lh3.googleusercontent.com/proxy/_OJ6-FVl_Dj2vTIp4hDFA3AAcxha6vxG0MyRbWA_AeVTw20Y-Vn9ukKrywDSg820B9mR5e5URodThdfje7sMTwqGit0RujmRjAt3VDswuUmCsSBiHoVT7oP6H3aotABVOuiQ_ZbUW8n0KvVxdg"/>
           <h2>Welcome to the North Texas Abortion Support Network, please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> </h2>  

           <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to="/about">
                    <Button variant="contained" color="primary">About us </Button>
                </Link>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home
