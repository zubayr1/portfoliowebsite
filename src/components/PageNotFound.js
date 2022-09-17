import React from 'react'
import {  Image, Button, Grid } from 'semantic-ui-react'
import pagenotfound from '../assets/pagenotfound.png'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    const returntohome = () =>
    {
        navigate("/");
    }
  return (
    <div >
        <Grid centered style={{maxWidth:'100%'}}>
            <Grid.Row>
                <Image src={pagenotfound} size='huge' circular/>
            </Grid.Row>

            <Grid.Row>
                <Button onClick={returntohome}>Back To Home</Button>
            </Grid.Row>
        </Grid>
        

        
    </div>
  )
}

export default PageNotFound