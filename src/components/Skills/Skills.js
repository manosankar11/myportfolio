import React from 'react';
import './Skills.js';
import { skills, SkillsData } from "../Data/SkillsData";
import SkillCard from './SkillCard';



const Skills = () => {
    const data = SkillsData;
    return (
        <div className="skills">
            <div className="skills-container">
                {data.map((item) => {
                    return (
                        <div className="section-title">
                            <label className="slills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Skills;
