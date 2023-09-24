import React from 'react'
import logo from '../assets/logo.png'
import {  Dropdown, Image, Grid } from 'semantic-ui-react'


const styles = {
  hoverable: {
    cursor: 'pointer', 
  },
};


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

        <Grid.Column mobile={6} tablet={4} computer={4}>
          <div onClick={() => changeState('home')} style={styles.hoverable}>
            <Image src={logo} size='small' />
          </div>
          
        </Grid.Column>

        <Grid.Column only='tablet computer' tablet={12} computer={10}>
          <Grid columns='equal'>
            <Grid.Column>
              <div onClick={() => changeState('home')} style={styles.hoverable}>
                Home
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={styles.hoverable}>
                Skills
              </div>              
            </Grid.Column>

            <Grid.Column>
            <div onClick={() => changeState('feedback')} style={styles.hoverable}>
                Feedback
              </div>
            </Grid.Column>

            <Grid.Column>
              <div onClick={() => changeState('token')} style={styles.hoverable}>
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