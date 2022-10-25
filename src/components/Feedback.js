import React from 'react'
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';
import {Grid, Button, Form, Segment} from 'semantic-ui-react';

function Feedback() {
    const navigate = useNavigate();
    
    const changeState = (childdata) => {    
    
        if(childdata==='home' )
        navigate("/");
        if(childdata==='feedback')
        navigate("/feedback");
        if(childdata==='token')
        navigate("/token");  
      }

    let formdisplay

    formdisplay = 
    <div style={{marginTop:'2%', marginLeft: "5%", marginRight:"5%"}}>
      <Segment>
      <Grid centered>
        <Grid.Column>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              
              <Button type='submit'>Register with Firebase</Button>
            </Form>
        </Grid.Column>
      </Grid>
      </Segment>
    </div>

  return (
    <div>
        <Header changeState={changeState}/>
        
        {formdisplay}
    </div>
  )
}

export default Feedback