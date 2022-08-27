import React from 'react'
import logo from '../assets/logo.png'
import {  Dropdown, Image, Grid } from 'semantic-ui-react'

function Header() {

  const options = [
    { key: 1, text: 'Home', value: 1 },
    { key: 2, text: 'Skills', value: 2 },
    { key: 3, text: 'Feedback', value: 3 },
    { key: 4, text: 'Token', value: 4 }
  ]

  function dropdownhandler(e, data)
  {
    console.log(data.value);
  }


  return (
    <div style={{marginLeft:'2%', marginRight:'2%', maxWidth:'100%'}}>
      
      <Grid style={{maxWidth:'90%'}} verticalAlign="middle" >

        <Grid.Column mobile={6} tablet={4} computer={4} >
          <Image src={logo} size='small' />
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
              Feedback
            </Grid.Column>

            <Grid.Column>
              Token
            </Grid.Column>

          </Grid>
        </Grid.Column>

        <Grid.Column only='mobile' floated='right'>
            <Dropdown options={options} 
            defaultValue={options[0].value}
            onChange={dropdownhandler} />
            
          </Grid.Column>

      </Grid >

    </div>
  )
}

export default Header