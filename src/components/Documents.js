import React from 'react'
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Segment,
  } from 'semantic-ui-react'

import pdfUrl from '../assets/resume_application_developer.pdf';

import wordUrl from '../assets/cover_letter.docx';

function Documents() {

const handleDownload = (arg) => 
{
    if (arg==="resume")
    {       

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'zubayr_khalid_resume.pdf'; 
        link.click();

    }
    else
    {      

        const link = document.createElement('a');
        link.href = wordUrl;
        link.download = 'zubayr_khalid_cover_letter.docx'; 
        link.click();
    }
    
};

  return (
    <div>       

        <Grid>

            <Grid.Row centered only='computer tablet'>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'1%'}}>
                    <p style={{color:'#FE560C', fontSize:'24px'}}> My Documents</p>
                </div>
            </Grid.Row>

            <Grid.Row only='computer tablet'>

                <Grid.Column >
                    <Segment placeholder>
                        <Grid columns={2} stackable textAlign='center'>
                        <Divider vertical></Divider>

                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name='pdf file outline' />
                                    Resume
                                </Header>
                                <Button onClick={() => handleDownload("resume")} primary>Download Document</Button>
                            </Grid.Column>

                            <Grid.Column>
                                <Header icon>
                                    <Icon name='file word outline' />
                                    Cover Letter
                                </Header>
                                <Button onClick={() => handleDownload("word")} primary>Download Document</Button>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>

                </Grid.Column>


            </Grid.Row>
            
        </Grid>

        <div style={{maxWidth: "100%", overflow: 'hidden'}}>
            <Grid>

                <Grid.Row centered only='mobile'>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'7%'}}>
                        <p style={{color:'#FE560C', fontSize:'24px'}}> My Documents</p>
                    </div>
                </Grid.Row>


                <Grid.Row only='mobile'>

                    <Grid.Column >             

                        <Segment placeholder>
                            <Header icon>
                                <Icon name='pdf file outline' />
                                Resume
                            </Header>
                            <Button onClick={() => handleDownload("resume")} primary>Download Document</Button>
                        </Segment>

                        <Segment placeholder>
                            <Header icon>
                                <Icon name='file word outline' />
                                Cover Letter
                            </Header>
                            <Button onClick={() => handleDownload("word")} primary>Download Document</Button>
                        </Segment>
                    </Grid.Column>

                </Grid.Row>

                

            </Grid>
        
        </div> 
        
    </div>
  )
}

export default Documents