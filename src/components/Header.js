import React from 'react'
import logo from '../assets/logo.png'
import {  Image, Grid } from 'semantic-ui-react'

function Header() {
  return (
    <div style={{marginLeft:'2%', marginRight:'2%'}}>
      
      <Grid columns='equal' verticalAlign="middle" >
        <Grid.Column floated='left'>
          <Image src={logo} size='small' />
        </Grid.Column>

        <Grid.Column >
          <Image src={logo} size='small' />
        </Grid.Column>

        <Grid.Column floated='right'>
                    
        </Grid.Column>

        
      </Grid>
    </div>
  )
}

export default Header