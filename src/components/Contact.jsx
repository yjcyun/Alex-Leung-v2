import React from 'react'
import styled from 'styled-components';
import Title from './Title';

const Contact = () => {
  return (
    <ContactStyled className='section-center'>
      <Title title='Get In Touch'/>
      <p>If you would like to get in touch with me, send me an email at <strong>alex [at] gmail.com</strong> or reach out to me on social media.</p>
    </ContactStyled>
  )
}

const ContactStyled = styled.section`
  padding:5rem 0;
  text-align:center;
`;

export default Contact