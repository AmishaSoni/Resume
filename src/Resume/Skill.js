import React from 'react'
import {FaCss3Alt,FaReact,FaHtml5} from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";

export const Skill = () => {
    return (
        <div>
        <div className="skill_head">
            SKILLS</div>
            <div className="skill_content">
                <div className="skill_name"><div className="skill_icon"><FaCss3Alt/></div><p>CSS</p></div>
                <div className="skill_name"><div className="skill_icon"><FaHtml5/></div><p>HTML</p></div>
                <div className="skill_name"><div className="skill_icon"><DiJavascript1/></div><p>JS</p></div>
                <div className="skill_name"><div className="skill_icon"><FaReact/></div><p>REACTJs</p></div>

            </div>
        </div>
    )
}
export default Skill;