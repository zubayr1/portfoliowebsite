import React from 'react'
import logo from '../assets/logo.png'
import {  Image, Grid } from 'semantic-ui-react'

function Header() {
  return (
    <div style={{marginLeft:'2%', marginRight:'2%'}}>
      
      <Grid  verticalAlign="middle" >

        <Grid.Column mobile={6} tablet={4} computer={4} floated='left'>
          <Image src={logo} size='small' />
        </Grid.Column>

        <Grid.Column mobile={10} tablet={12} computer={10}>
          <Grid columns='equal'>
            <Grid.Column>
              Home
            </Grid.Column>

            <Grid.Column>
              Skills
            </Grid.Column>

            <Grid.Column>
              Feedback
            </Grid.Column>

            <Grid.Column>
              Token
            </Grid.Column>

          </Grid>
        </Grid.Column>

      </Grid>
    </div>
  )
}

export default Header