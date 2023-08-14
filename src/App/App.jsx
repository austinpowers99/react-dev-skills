import { useState } from 'react';
import React from 'react'
import './App.css'
import SkillList from '../SkillList';
import NewSkillForm from '../NewSkillForm/NewSkillForm';

const initialSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills);

  function addSkill(skill) {
    setSkills([...skills, skill]);
  }
  
  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <NewSkillForm addSkill={addSkill}/>
    </>
  )
}

export default App
