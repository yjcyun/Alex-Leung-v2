import React from 'react';
import styled from 'styled-components';
import { skills } from '../constants/skills';

const Skills = () => {
  return (
    <SkillList>
      {skills.map(({ skill }) => (
        <li key={skill}>{skill}</li>
      ))}
    </SkillList>
  )
}

const SkillList = styled.div`
  display:grid;
  grid-template-columns: repeat(2, minmax(130px, 200px));
  list-style:square;
  margin-top: 1rem;
`

export default Skills