import React from 'react';
import SkillsData from '@/assets/jsonData/skills/SkillsData.json'
import SingleSkill from './SingleSkill';

const Skills = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-1 info">
                            <h2 className="curbe-title">My Skills</h2>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {SkillsData.map(skill =>
                                    <SingleSkill skill={skill} key={skill.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;