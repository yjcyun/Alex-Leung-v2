import React from 'react';
import styled from 'styled-components';
import { skills } from '../constants/skills';

const Skills = () => {
  return (
    <SkillList>
      {skills.map(({ skill }) => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </SkillList>
  )
}

const SkillList = styled.div`
  display:grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  list-style:none;
  margin-top: 1rem;
`

const SkillItem = styled.li`
  position:relative;
  padding-left: 1.2rem;

  &:before {
   content:'♦';
    position: absolute;
    left: 0;
    font-size:1rem;
    color: var(--clr-highlight)
  }
`

export default Skills