import React, {useState} from 'react'
import {  Image, Grid } from 'semantic-ui-react'
import my_image from '../assets/my_image.jpg'
import  './floating.css'

function Myself() {

    const [seemore, setSeeMore] = useState(0);

    let smallvalue = 
    <div>
        <Grid style={{marginLeft:'1%'}}>
                    
                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'black', fontSize:'32px', textAlign:'justify', maxWidth:'100%'}}>
                        Zubayr Khalid

                    </p>

                    </Grid.Row>

                    <Grid.Row>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                I am just a person crazy enough to be motivated by a lots of cool stuff. 
                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                First of all, I really like working on <p style={{display:"inline", color:'#FE560C'}}>innovative things! </p>
                                This include writing a new piece of code with Python as well as trying a new recipe!!
                    </p>

                    <div onClick={() => setSeeMore(1)}>
                        <p>see more ...</p>
                    </div>
                    
                        
                    </Grid.Row>
                
            </Grid>

    </div>

    let bigvalue =
    <div>
        <Grid style={{marginLeft:'1%'}}>
                    
                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'black', fontSize:'32px', textAlign:'justify', maxWidth:'100%'}}>
                        Zubayr Khalid

                    </p>

                    </Grid.Row>

                    <Grid.Row>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                I am just a person crazy enough to be motivated by a lots of cool stuff. 
                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                First of all, I really like working on <p style={{display:"inline", color:'#FE560C'}}>innovative things! </p>
                                This include writing a new piece of code with Python as well as trying a new recipe!!
                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                I am fascinated about the idea of blockchain, cryptocurrency and the overall web3 concept. At the time of writing this 
                                document, its still quite early for the <p style={{display:"inline", color:'#FE560C'}}> Ethereum Merge </p>,
                                but I can't wait for this to happen!!

                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                               I am also interested in full stack development, cloud services and fundamental coding.
                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                               Before you take me as a complete nerd, I am interested in Football, Badminton and also wasting hours on Netflix!
                               And people say I am quite a  <p style={{display:"inline", color:'#FE560C'}}> party person!! </p>
                               And oh yes, I like to play guitar (not for a big audience though!)
                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                I also very much like to waste my time on playing the popular game Valorant (back to being a nerd &#128512; )
                    </p>

                    <div onClick={() => setSeeMore(0)}>
                        <p>see less ...</p>
                    </div>
                        
                    </Grid.Row>
                
            </Grid>
    </div>

    let resultdisplay
    if(seemore===0)
    {
        resultdisplay = smallvalue
    }
    else
    {
        resultdisplay = bigvalue
    }
    

  return (
    <div style={{marginLeft:'6%', marginRight:'6%', marginTop:'3%'}}>

        <Grid style={{maxWidth:'100%', paddingLeft:'1%'}} verticalAlign="middle">
            <Grid.Column only='computer tablet' tablet={4} computer={4}>
                <div class="avatar">
                <Image src={my_image} size='huge' circular/>
                </div>                
            </Grid.Column>

            <Grid.Column only='computer tablet' tablet={8} computer={8} floated='right'>
            
                <Grid>
                    
                        <Grid.Row>
                        <p class="FuturaFont" style={{color:'black', fontSize:'32px', textAlign:'justify', maxWidth:'100%'}}>
                            Zubayr Khalid

                        </p>

                        </Grid.Row>

                        <Grid.Row>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                    I am just a person crazy enough to be motivated by a lots of cool stuff. 
                        </p>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                    First of all, I really like working on <p style={{display:"inline", color:'#FE560C'}}>innovative things! </p>
                                    This include writing a new piece of code with Python as well as trying a new recipe!!
                        </p>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                    I am fascinated about the idea of blockchain, cryptocurrency and the overall web3 concept. At the time of writing this 
                                    document, its still quite early for the <p style={{display:"inline", color:'#FE560C'}}> Ethereum Merge </p>,
                                    but I can't wait for this to happen!!

                        </p>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                   I am also interested in full stack development, cloud services and fundamental coding.
                        </p>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                   Before you take me as a complete nerd, I am interested in Football, Badminton and also wasting hours on Netflix!
                                   And people say I am quite a  <p style={{display:"inline", color:'#FE560C'}}> party person!! </p>
                                   And oh yes, I like to play guitar (not for a big audience though!)
                        </p>

                        <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                    I also very much like to waste my time on playing the popular game Valorant (back to being a nerd &#128512; )
                        </p>
                            
                        </Grid.Row>
                    
                </Grid>
                
            </Grid.Column>

            <Grid.Row only='mobile' centered>
                <Image src={my_image} size='small' circular/>
            </Grid.Row>

            <Grid.Row only='mobile'>

                {resultdisplay}

            </Grid.Row>
        </Grid>

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'3%'}}>

            <Grid centered>
                <Grid.Row>
                    <p class="FuturaFont" style={{color:'black', fontSize:'24px', textAlign:'justify', maxWidth:'100%'}}>
                        My Description
                    </p>

                </Grid.Row>

                <Grid.Row>
                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                        Naahhh, I don't wanna waste your time on more textual descriptions. I have made this website from scratch with 
                        React js. I have included most of the stuff, such as interaction with 
                        <p style={{display:"inline", color:'#FE560C'}}> Google Firebase</p>, 
                        <p style={{display:"inline", color:'#FE560C'}}> Etherjs</p> to interact with 
                        <p style={{display:"inline", color:'#FE560C'}}> Rinkebey test network</p> herewith.

                    </p>

                    <p class="FuturaFont" style={{color:'black', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                        Just go through this website and you will have a brief idea about me &#128513;
                    </p>
                    
                </Grid.Row>
            </Grid>


        </div>

        
        
    </div>
  )
}

export default Myself