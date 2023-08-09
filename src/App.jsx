import React from 'react'
import './App.css'
import SkillList from './SkillList'
import NewSkillListItem from './NewSkillListItem'

const skills = [
  { name: "Python", level: 3 },
  { name: "Javascript", level: 4 },
  { name: "React", level: 1 },
]

export default function App() {
  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <ul><NewSkillListItem></NewSkillListItem></ul>
    </>
  )
}
