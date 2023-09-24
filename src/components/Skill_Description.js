import React, { useState, useEffect } from 'react';
import "./skill_desc.css";

function Skill_Description({ selectedIndex }) {

const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

useEffect(() => {
    setSelectedSkillIndex(selectedIndex);
}, [selectedIndex]);

let content;

if (selectedSkillIndex===0)
{
    content = <div>
        <p>Select a skill set to see skill description!</p>
    </div>
}

return (
    <div className="skill-description-container">
        <div>
            <p className="skill-description-text">Skill_Description</p>
        </div>

        <div>
            {content}
        </div>
    </div>
)
}

export default Skill_Description