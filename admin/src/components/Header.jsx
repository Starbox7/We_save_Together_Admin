import React from 'react';
import styled from 'styled-components';
import { Link as OriginalLink } from 'react-router-dom';

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 50px;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuTitle = styled.span`
  font-size: 18px;
  color: #333;
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
`;

const AuthButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:first-child {
    margin-right: 15px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
      background-color: #333;
    }
  }
`;

const Link = styled(OriginalLink)`
  text-decoration: none;
`;



const Header = () => {
    return (
        <HeaderComponent>
            <Link to="/">
                <Logo>Code for DCU</Logo>
            </Link>
            <MenuWrapper>
                <Menu>
                    <MenuItem>
                        <Link to="/introproject">
                            <MenuTitle>프로젝트 소개</MenuTitle>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/introteam">
                            <MenuTitle>팀 소개</MenuTitle>
                        </Link>
                    </MenuItem>
                </Menu>
            </MenuWrapper>
            <Auth>
                <Link to="/signin">
                    <AuthButton>로그인</AuthButton>
                </Link>
                <Link to="/signup">
                    <AuthButton>회원가입</AuthButton>
                </Link>
            </Auth>
        </HeaderComponent>
    );
};

export default Header;





