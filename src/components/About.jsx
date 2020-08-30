import React from 'react'
import styled from 'styled-components';
import Title from './Title';
import Skills from './Skills';

const About = () => {
  return (
    <AboutStyled className='section-center'>
      <Title title='About Me' />
      <AboutCenter>
        <AboutInfo>
          My formal training is in electrical engineering but have since pivoted into the fast-paced and dynamic field of software engineering. My current interests lie in applying effective software design in creating solutions to practical problems. In my free time I enjoy keeping up with my craft, reading, and spending time with my dogs. <br /><br />

          <Skills />
        </AboutInfo>
        <img
          src='assets/about.jpg'
          alt='Alex with his dog'
        />
      </AboutCenter>
    </AboutStyled>
  )
}

const AboutStyled = styled.section`
  padding:5rem 0 0;
`;

const AboutCenter = styled.div`
 @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 4rem;
    padding-top: 2rem;
  }
`;

const AboutInfo = styled.div`
  text-align: left;
  line-height:1.8;
  font-weight: 1.2rem;
  margin-bottom:2rem;

  @media (min-width: 992px) {
    width: 90%;
  }
`

export default About
