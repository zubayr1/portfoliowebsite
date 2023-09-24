import React, { useState, useEffect } from 'react';
import "./skill_desc.css";

function Skill_Description({ selectedIndex }) {

const [selectedSkillIndex, setSelectedSkillIndex] = useState(localStorage.getItem('selectedSkillIndex') || 0);

useEffect(() => {
    // Update selectedSkillIndex whenever selectedIndex changes
    setSelectedSkillIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    // Store selectedSkillIndex in localStorage whenever it changes
    localStorage.setItem('selectedSkillIndex', selectedSkillIndex);
  }, [selectedSkillIndex]);

  useEffect(() => {
    const storedSelectedSkillIndex = localStorage.getItem('selectedSkillIndex');
    if (storedSelectedSkillIndex) {
      setSelectedSkillIndex(parseInt(storedSelectedSkillIndex));
    }
  }, []);


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
    </div>
)
}

export default Skill_Description