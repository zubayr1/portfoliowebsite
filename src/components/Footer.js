import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import linkedin_logo from '../assets/linkedin_logo.png'
import medium_logo from '../assets/medium_logo.png'

function Footer() {
  return (
    <footer>

        <div>

            <div style={{paddingLeft: "10%", paddingTop: "1%", paddingRight: "10%", paddingBottom: "1%"}}>
                <Grid>
                    <Grid.Row only='computer tablet' columns={4} divided>

                        <Grid.Column width={4}>
                            <h3 style={{color: "GrayText"}}>Tools used to generate this applicaiton</h3>

                            <div >
                                <p style={{color: "GrayText"}}>React js</p>
                                <p style={{color: "GrayText"}}>Node js</p>
                                <p style={{color: "GrayText"}}>Mongodb</p>
                                <p style={{color: "GrayText"}}>Firebase</p>
                                <p style={{color: "GrayText"}}>Solidity</p>
                            </div>
                            
                        </Grid.Column>

                        <Grid.Column width={8} centered>
                            <Grid centered>
                                <Grid.Row>
                                    <h3 style={{color: "GrayText", textAlign: "center"}}>@Copyright: Zubayr Khalid</h3> 
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={2}>
                                        <a href="https://www.linkedin.com/in/zubayr-khalid-393257117/">
                                            <Image src={linkedin_logo} style={{width:"80%"}}/>
                                        </a>
                                    </Grid.Column>

                                    <Grid.Column width={2}>
                                        <a href="https://medium.com/@write2zubayr">
                                            <Image  src={medium_logo}  style={{width:"80%"}}/>
                                        </a>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                                                   

                        </Grid.Column>

                        <Grid.Column floated='right' width={4}>
                            <h3 style={{color: "GrayText"}}>Contact me!</h3>

                            <Grid>
                                <Grid.Column>
                                    <Icon  name='mail outline' color='grey'/>
                                </Grid.Column>

                                <Grid.Column>
                                    <p style={{color: "GrayText", whiteSpace: "nowrap"}}>
                                        <a href="mailto:example@example.com">zukh00001@stud.uni-saarland.de</a>
                                    </p>
                                </Grid.Column>

                            </Grid>
                            
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row only='computer tablet'>
                        
                    </Grid.Row>
                    
                </Grid>

            </div>            

            <div style={{paddingBottom: "1%", overflow: "hidden"}}>
                <Grid centered>
                    <Grid.Row only='mobile'>
                        <h3 style={{color: "GrayText"}}>Tools used to generate this applicaiton</h3>

                        <p style={{color: "GrayText"}}>React js, Node js, Mongodb, Firebase, Solidity</p>

                    </Grid.Row>

                    <Grid.Row only='mobile'>
                        <Grid>
                            <Grid.Column>
                                <Icon  name='mail outline' color='grey'/>
                            </Grid.Column>

                            <Grid.Column>
                                <p style={{color: "GrayText", whiteSpace: "nowrap"}}>
                                    <a href="mailto:example@example.com">zukh00001@stud.uni-saarland.de</a>
                                </p>
                                
                            </Grid.Column>

                        </Grid>
                    </Grid.Row>


                    <Grid.Row only='mobile'>
                        <h3 style={{color: "GrayText", textAlign: "center"}}>@Copyright: Zubayr Khalid</h3>  

                    </Grid.Row>
                    

                    <Grid.Row only='mobile'>

                        <Grid centered>
                            <Grid.Column width={2}>
                                <a href="https://www.linkedin.com/in/zubayr-khalid-393257117/">
                                <Image src={linkedin_logo} style={{width:"100%"}}/>
                                </a>
                            </Grid.Column>

                            <Grid.Column width={2}>
                                <a href="https://medium.com/@write2zubayr">
                                    <Image  src={medium_logo}  style={{width:"100%"}}/>
                                </a>
                            </Grid.Column>
                        </Grid>
                        
                    </Grid.Row>

                </Grid>

            </div>
            


        </div>
        
    </footer>
  )
}

export default Footer