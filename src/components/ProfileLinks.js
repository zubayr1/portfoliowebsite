import React from 'react'
import {  Grid, Icon } from 'semantic-ui-react'

function ProfileLinks() {
  return (
    <div style={{backgroundColor:'#dfe3f0', marginTop:'2%', maxWidth:'100%', padding:'2%'}}>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <p class="roboto-font" style={{color:'black', fontSize:'24px', textAlign:'justify', maxWidth:'100%'}}>My Links</p>

      </div>

      <div style={{maxWidth:'80%', marginLeft:'3%'}}>
        <Grid >
          
          <Grid.Row>
            <Grid.Column mobile={2} tablet={2} computer={2}>
              <Icon name='linkedin'/>
            </Grid.Column>

            <Grid.Column mobile={12} tablet={12} computer={12}>
              <p class="roboto-font" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}> 
              <p style={{display:"inline"}}><b>LinkedIn:</b> </p>
              <a href="https://www.linkedin.com/in/zubayr-khalid-393257117/">https://www.linkedin.com/in/zubayr-khalid-393257117/</a>
              </p>

            </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile={2} tablet={2} computer={2}>
              <Icon name='github'/>
            </Grid.Column>

            <Grid.Column mobile={12} tablet={12} computer={12}>
              <p class="roboto-font" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}> 
              <p style={{display:"inline"}}><b>Github:</b> </p>
              <a href="https://github.com/zubayr1">https://github.com/zubayr1</a>
              </p>

            </Grid.Column>
            
          </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile={2} tablet={2} computer={2}>
              <Icon name='medium'/>
            </Grid.Column>

            <Grid.Column mobile={12} tablet={12} computer={12}>
              <p class="roboto-font" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}> 
              <p style={{display:"inline"}}><b>Medium:</b> </p>
              <a href="https://medium.com/@write2zubayr">https://medium.com/@write2zubayr</a>
              </p>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>

     
        
    </div>
  )
}

export default ProfileLinks