import React, { useState, useEffect } from 'react';
import "./skill_desc.css";
import Plot from 'react-plotly.js';
import { Grid,   } from 'semantic-ui-react'

function Skill_Description({ selectedIndex }) {

const [selectedSkillIndex, setSelectedSkillIndex] = useState(localStorage.getItem('selectedSkillIndex') || 0);

const [totalCommit, setTotalCommit] = useState({});


useEffect(() => {
    // Update selectedSkillIndex whenever selectedIndex changes
    setSelectedSkillIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    // Store selectedSkillIndex in localStorage whenever it changes
    localStorage.setItem('selectedSkillIndex', selectedSkillIndex);


    const username = 'zubayr1';

    let repositories = [];

    if (selectedSkillIndex===1)
    {
        repositories = ['portfoliowebsite', 'NFT', 'cv_blockchain', 'zollo', 'React_router'];
    }
    if (selectedSkillIndex===2)
    {
        repositories = ['portfoliowebsite', 'NFT', 'cv_blockchain', 'zollo', 'React_router'];
    }
    
    if (selectedSkillIndex===3)
    {
        repositories = ['matching-algorithm'];
    }
    if (selectedSkillIndex===4)
    {
        repositories = ['NLP_Project_2021', 'codes'];
    }
    if (selectedSkillIndex===5)
    {
        repositories = ['matching-algorithm', 'rustMainWorks'];
    }
    if (selectedSkillIndex===6)
    {
        repositories = ['matching-algorithm'];
    }
    if (selectedSkillIndex===7)
    {
        repositories = ['cv_blockchain', 'NFT', 'portfoliowebsite'];
    }
    if (selectedSkillIndex===8)
    {
        repositories = ['matching-algorithm'];
    }
    if (selectedSkillIndex===9)
    {
        repositories = ['rust_merkle_tree', 'rustMainWorks'];
    }
    if (selectedSkillIndex===10)
    {
        repositories = ['matching-algorithm', 'NFT'];
    }
    if (selectedSkillIndex===11)
    {
        repositories = ['oli'];
    }

    
    

    const fetchData = async () => {
        let total_commit = {};
  
        for (const repository of repositories) {
          try {
            const commits = await get_git_commit(username, repository);
            
            for (const year in commits) {
              if (!total_commit[year]) {
                total_commit[year] = 0;
              }
              total_commit[year] += commits[year];
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
  
        // Set the state with the accumulated data
        setTotalCommit(total_commit);

      };
  
      fetchData();
    
  }, [selectedSkillIndex]);

  useEffect(() => {
    const storedSelectedSkillIndex = localStorage.getItem('selectedSkillIndex');
    if (storedSelectedSkillIndex) {
      setSelectedSkillIndex(parseInt(storedSelectedSkillIndex));
    }
  }, []);


  const get_git_commit = async (username, repository) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repository}/commits`);
      const commits = await response.json();
  
      const commitCountsByYear = {};
  
      commits.forEach((commit) => {
        const commitDate = new Date(commit.commit.author.date);
        const year = commitDate.getFullYear();
  
        if (!commitCountsByYear[year]) {
          commitCountsByYear[year] = 0;
        }
  
        commitCountsByYear[year]++;
      });
  
      return commitCountsByYear;
    } catch (error) {
      console.error('Error fetching commits:', error);
      throw error;
    }
  };


  const years = Object.keys(totalCommit);
  const counts = Object.values(totalCommit);

  const data = [
    {
      x: years,
      y: counts,
      type: 'bar',
      marker: { color: 'rgb(0, 102, 204)' },
    },
  ];

  const layout = {
    title: 'Commit Counts by Year (based on actual data)',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Commit Count' },
  };

  const layout_mobile = {
    title: 'Commit Counts vs Year',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Commit Count' },
  };
  


let content;

if (selectedSkillIndex===0)
{
    content = <div>
        <p style={{fontSize: "20px"}}>Select a skill set to see skill description!</p>
    </div>
}

if (selectedSkillIndex===1)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>This porfolio Web Application <a href="https://github.com/zubayr1/portfoliowebsite"> link</a></p>
        <p style={{fontSize: "20px"}}>NFT Web Application (my best work!)<a href="https://github.com/zubayr1/NFT"> link</a></p>
        <p style={{fontSize: "20px"}}>Resume Builder Web Application<a href="https://github.com/zubayr1/cv_blockchain"> link</a></p>
        <p style={{fontSize: "20px"}}>Freelance Applicaiton: Zollo<a href="https://github.com/zubayr1/zollo"> link</a></p>
        <p style={{fontSize: "20px"}}>Practice: React Router<a href="https://github.com/zubayr1/React_router"> link</a></p>
    </div>

    
    
}

if (selectedSkillIndex===2)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>This porfolio Web Application <a href="https://github.com/zubayr1/portfoliowebsite"> link</a></p>
        <p style={{fontSize: "20px"}}>NFT Web Application (my best work!)<a href="https://github.com/zubayr1/NFT"> link</a></p>
        <p style={{fontSize: "20px"}}>Resume Builder Web Application<a href="https://github.com/zubayr1/cv_blockchain"> link</a></p>
        <p style={{fontSize: "20px"}}>Freelance Applicaiton: Zollo<a href="https://github.com/zubayr1/zollo"> link</a></p>
        <p style={{fontSize: "20px"}}>Practice: React Router<a href="https://github.com/zubayr1/React_router"> link</a></p>
    </div>
}

if (selectedSkillIndex===3)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>Student Job work (2020- present). Limited due to privacy reasons! 
            <a href="https://github.com/zubayr1/matching-algorithm"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===4)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>Competetive Coding (including Google Foobar) 
            <a href="https://github.com/zubayr1/codes"> link</a></p>

        <p style={{fontSize: "20px"}}>Saarland University Project 
            <a href="https://github.com/zubayr1/NLP_Project_2021"> link</a></p>
        
    </div>
}


if (selectedSkillIndex===5)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>Master's Thesis Work (with 64 EC2) 
            <a href="https://github.com/zubayr1/rustMainWorks"> link</a></p>

        <p style={{fontSize: "20px"}}>Student Job work (2020- present). Limited due to privacy reasons! Work with EC2 and Dynamo DB 
            <a href="https://github.com/zubayr1/matching-algorithm"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===6)
{
    content = <div style={{marginTop:"2px"}}>
        
        <p style={{fontSize: "20px"}}>Student Job work (2020- present). Limited due to privacy reasons! Work with Azure functions and Cosmos DB 
            <a href="https://github.com/zubayr1/matching-algorithm"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===7)
{
    content = <div style={{marginTop:"2px"}}>
        <p style={{fontSize: "20px"}}>This porfolio Web Application (Authentication) <a href="https://github.com/zubayr1/portfoliowebsite"> link</a></p>
        <p style={{fontSize: "20px"}}>NFT Web Application (my best work!) (Authentication and Realtime Database) <a href="https://github.com/zubayr1/NFT"> link</a></p>
        <p style={{fontSize: "20px"}}>Resume Builder Web Application (Authentication) <a href="https://github.com/zubayr1/cv_blockchain"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===8)
{
    content = <div style={{marginTop:"2px"}}>
        
        <p style={{fontSize: "20px"}}>Student Job work (2020- present). Limited due to privacy reasons! 
            <a href="https://github.com/zubayr1/matching-algorithm"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===9)
{
    content = <div style={{marginTop:"2px"}}>
        
        <p style={{fontSize: "20px"}}>Masters Thesis 
            <a href="https://github.com/zubayr1/rustMainWorks"> link</a></p>

        <p style={{fontSize: "20px"}}>Merkle Tree and Reed Solomon 
            <a href="https://github.com/zubayr1/rust_merkle_tree"> link</a></p>
        
    </div>
}


if (selectedSkillIndex===10)
{
    content = <div style={{marginTop:"2px"}}>
        
        <p style={{fontSize: "20px"}}>NFT Web Application (my best work!)<a href="https://github.com/zubayr1/NFT"> link</a></p>


        <p style={{fontSize: "20px"}}>Student Job work (2020- present). Limited due to privacy reasons! 
            <a href="https://github.com/zubayr1/matching-algorithm"> link</a></p>
        
    </div>
}

if (selectedSkillIndex===11)
{
    content = <div style={{marginTop:"2px"}}>
        
        <p style={{fontSize: "20px"}}>Freeland Work (With Spring Boot)<a href="https://github.com/zubayr1/oli"> link</a></p>

        
    </div>
}

return (
    <div className="skill-description-container">
        <div>
            <p className="skill-description-text">Skill_Description</p>
        </div>

        <div style={{padding: "2%"}}>
            {content}
        </div>

        <Grid>
            <Grid.Row only='computer tablet'>

                <div style={{padding: "2%"}}>            
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Plot data={data} layout={layout} />
                    </div>
                </div>

            </Grid.Row>

            <Grid.Row only='mobile'>

                <Grid.Column>
                    <div style={{padding: "2%"}}>            
                        <div style={{ display: 'flex', flexDirection: 'row' , maxWidth: "80%"}}>
                            <Plot data={data} layout={layout_mobile} style={{width: "80%"}}/>
                        </div>
                    </div>
                </Grid.Column>

            </Grid.Row>

        </Grid>

        
    </div>
)
}

export default Skill_Description