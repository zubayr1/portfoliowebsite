import React from 'react'
import logo from '../assets/logo.png'
import {  Dropdown, Image, Grid } from 'semantic-ui-react'

function Header({changeState}) {



  const options = [
    { key: 1, text: 'Home', value: 'home' },
    { key: 2, text: 'Skills', value: 'skills' },
    { key: 3, text: 'Feedback', value: 'feedback' },
    { key: 4, text: 'Token', value: 'token' }
  ]

  
  return (
    <div style={{marginLeft:'2%', marginRight:'2%', maxWidth:'100%'}}>
      
      <Grid style={{maxWidth:'90%'}} verticalAlign="middle" >

        <Grid.Column mobile={6} tablet={4} computer={4} >
          <div onClick={() => changeState('home')}>
            <Image src={logo} size='small' />
          </div>
          
        </Grid.Column>

        <Grid.Column only='tablet computer' tablet={12} computer={10}>
          <Grid columns='equal'>
            <Grid.Column>
              Home
            </Grid.Column>

            <Grid.Column>
              Skills
            </Grid.Column>

            <Grid.Column>
            <div onClick={() => changeState('feedback')}>
                Feedback
              </div>
            </Grid.Column>

            <Grid.Column>
              <div onClick={() => changeState('token')}>
                Token
              </div>
              
            </Grid.Column>

          </Grid>
        </Grid.Column>

        <Grid.Column only='mobile' floated='right'>
            <Dropdown options={options} 
            defaultValue={options[0].value}
            onChange={(e, data) => changeState(data.value)} />
            
          </Grid.Column>

      </Grid >

    </div>
  )
}

export default Header