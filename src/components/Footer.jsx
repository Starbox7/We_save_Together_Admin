// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #444;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 50px;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin: 0 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>Copyright (c) 2023, Code for DCU Team.</span>
        <span>|</span>
        <span>Email : CodeforDCU@gmail.com</span>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
