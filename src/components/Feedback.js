import React, {useState} from 'react'
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';
import {Grid, Button, Form, Segment, TextArea} from 'semantic-ui-react';

function Feedback() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [name, setName] = useState("");

    const [feedback, setFeedback] = useState("");

    const [checkLogin, setCheckLogin] = useState(0);
    
    const changeState = (childdata) => {    
    
        if(childdata==='home' )
        navigate("/");
        if(childdata==='feedback')
        navigate("/feedback");
        if(childdata==='token')
        navigate("/token");  
      }

      const registrationHandler = () =>
      {
        if(username!=="" && password!=="" && username!==" " && password!==" ")
        {
          if(password === confirmpassword)
          {
            setCheckLogin(1);
          }
        }
        
      }

      const loginHandler = () =>
      {
        if(username!=="" && password!=="" && username!==" " && password!==" ")
        {
          setCheckLogin(2);
        }
        
      }


      const feedbackHandler = () =>
      {
        if(username!=="" && password!=="" && username!==" " && password!==" ")
        {
          console.log(name, feedback);
        }
        
        
      }

    let formdisplay

    if(checkLogin===0)
    {
      formdisplay = 
      <div style={{marginTop:'2%', marginLeft: "5%", marginRight:"5%"}}>
        <Segment>
        <Grid centered>
          <Grid.Column>
              <Form>
                <Form.Field>
                  <label>UserName</label>
                  <input placeholder='UserName' onChange={(e)=>setUsername(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                </Form.Field>

                <Form.Field>
                  <label>Confirm Password</label>
                  <input placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                </Form.Field>
                
                <Button inverted color='blue' type='submit' onClick={registrationHandler}>Register with Firebase</Button>
              </Form>
          </Grid.Column>
        </Grid>
        </Segment>
      </div>
    }
    else if(checkLogin===1)
    {
      formdisplay = 
      <div style={{marginTop:'2%', marginLeft: "5%", marginRight:"5%"}}>
        <Segment>
        <Grid centered>
          <Grid.Column>
              <Form>
                <Form.Field>
                  <label>UserName</label>
                  <input placeholder='UserName' onChange={(e)=>setUsername(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                </Form.Field>

                <Button inverted color='blue' type='submit' onClick={loginHandler}>Login with Firebase</Button>
              </Form>
          </Grid.Column>
        </Grid>
        </Segment>
      </div>
    }
    else
    {
      formdisplay = 
      <div style={{marginTop:'2%', marginLeft: "5%", marginRight:"5%"}}>
        <Segment>
        <Grid centered>
          <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input onFocus={false} value={" "} placeholder='Name' onChange={(e)=>setName(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                  <label>Feedback</label>
                  <TextArea onFocus={false} value={" "} placeholder='Feedback' onChange={(e)=>setFeedback(e.target.value)} required/>
                </Form.Field>

                <Button inverted color='blue' type='submit' onClick={feedbackHandler}>Send Feedback</Button>
              </Form>
          </Grid.Column>
        </Grid>
        </Segment>
      </div>
    }

  return (
    <div>
        <Header changeState={changeState}/>
        
        {formdisplay}
    </div>
  )
}

export default Feedback