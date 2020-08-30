import React from 'react';
import styled from 'styled-components';
import { skills } from '../constants/skills';

const Skills = () => {
  return (
    <>
      Here are a few technologies I've been working with:
        <SkillList>
          {skills.map(({ skill }) => (
            <li key={skill}>{skill}</li>
          ))}
        </SkillList>
    </>
  )
}

const SkillList = styled.ul`
  display:grid;
  grid-template-columns: repeat(2, minmax(130px, 200px));
  list-style:none;
  margin-top: 1rem;
  padding: 0;

  li {
    position:relative;
    padding-left: 1rem;
    margin-bottom:0.8rem;
    line-height: 1rem;
  }

  li:before {
    content: '■';
    position:absolute;
    left: 0;
    font-size: 1rem;
    top:-0.1rem;
  }
`

export default Skills