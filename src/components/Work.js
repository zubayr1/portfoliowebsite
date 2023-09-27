import React from 'react'
import special_work from '../assets/special_work.png'
import { Grid, Image, Button } from 'semantic-ui-react'
import "./best_work.css";
function Work() {
  return (
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'1%'}}>
            <p style={{color:'#000000', fontSize:'24px'}}> My Best Work</p>
        </div>

        

        <Grid>
            <Grid.Column only='computer tablet'>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'1%'}}>
                    <p style={{color:'#000000', fontSize:'16px'}}> Here I showoff a bit on my best work so far. Please visit the site once!</p>
                </div>
                
                <div className="container">
                    <Image src={special_work} alt="Snow" style={{width:"100%"}}/>
                    <Button className="btn" color='orange' >Go to Site</Button>
                </div>

            </Grid.Column>

            
        </Grid>

        <Grid >            
            <Grid.Row centered only='mobile'>
                <div style={{marginLeft: "4%", marginRight: "4%"}}>
                    <p style={{color:'#000000', fontSize:'16px'}}> Here I showoff a bit on my best work so far. Please visit the site once!</p>
                </div>
            </Grid.Row>

            <Grid.Row only='mobile'>
                <Image src={special_work} alt="Snow" style={{width:"100%"}}/>
            </Grid.Row>

            <Grid.Row only='mobile' centered>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: "0%", marginBottom: "1%"}}>
                    <Button color='orange' >Go to Site</Button>
                </div>                
            </Grid.Row>
        </Grid>

        

    </div>
  )
}

export default Work