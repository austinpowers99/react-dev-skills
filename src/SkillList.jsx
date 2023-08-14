import React from 'react';
import SkillListItem from './SkillListItem/SkillListItem';

export default function SkillList({ skills }) {
    return (
        <>
            <ul>
                {skills.map((s, idx) => <SkillListItem skill={s} index={idx} key={idx} />)}
            </ul>
        </>
    );
}