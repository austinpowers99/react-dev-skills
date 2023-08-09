import React from 'react';

export default function SkillList({ skills }) {
    return (
        <div>
            <h2>Skills List</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill.name} - Level {skill.level}
                    </li>
                ))}
            </ul>
        </div>
    );
}