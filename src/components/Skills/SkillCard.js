import React from 'react'
import './SkillCard.css'


const SkillCard = ({ skill }) => {
    return (
        <div className="Skill-card">
            <div className="skill-icon">
                {skill.icon}
            </div>
            <label className="skill-name">
                {skill.name}
            </label>
        </div>
    )
}

export default SkillCard;
