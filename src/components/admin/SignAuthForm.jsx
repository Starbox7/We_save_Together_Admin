/** import library */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link as OriginalLink } from 'react-router-dom';
import Loading from 'react-loading';
/** import component */
import Header from '../visit/Header';
/** import Color */
import { AdminColor, BorderColor, DetailBackgroundColor } from '../../asset/Colors';
/** import asset */
import TeamImage from '../visit/TeamImage';
/** import Repository */
import AuthRepository from '../../service/authRepository';
/** */
import { IoIosCheckbox } from 'react-icons/io';
/** */
import { IconColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  background-color: ${AdminColor.White};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 200px;
`;
const ImageContainer = styled.div`
  margin-bottom: 35px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${BorderColor.bdcGreen1};
  border-radius: 35px;
  padding: 3px;
  margin: 7px;
  width: 430px;
  height: 50px;
`;
const Input = styled.input`
  display: flex;
  height: 50px;
  width: 290px;
  border: none;
  outline: 0px;
  padding-left: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Button = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-radius: 17px;
  border: 1px solid ${BorderColor.bdcGreen1};
  padding: 11px;
  background-color: ${DetailBackgroundColor.dbcGreen2};
  font-size: 15px;
  margin: 7px;
  width: 150px;
`;
const Text = styled.p`
  display: flex;
  padding-right: 15px;
  padding-left: 25px;
  padding-top: 2px;
  border-right: 1px solid ${BorderColor.bdcGreen1};
  justify-content: center;
  width: 50px;
`;
const Link = styled(OriginalLink)`
  text-decoration: none;
  color: ${AdminColor.Black};
`;
const IconContainer = styled.div`
  margin: 15px;
  margin-top: 15px;
`;

function SignAuthForm() {
  const { isLoading, isAuth, confirmAuthNumber } = AuthRepository();
  const [confirmData, setConfirmData] = useState({
    auth: '',
    id: '',
    password: '',
    confirm: '',
  });

  const onChange = (e) =>
    setConfirmData({
      ...confirmData,
      [e.target.id]: e.target.value,
    });
  const onClick = () => {
    confirmAuthNumber(confirmData.auth);
  };

  return (
    <Container>
      {isLoading ? (
        <Loading type="spin" color="#fff" height={20} width={20} />
      ) : (
        <>
          <Header />
          <SignInContainer>
            <ImageContainer>
              <TeamImage />
            </ImageContainer>
            <InputContainer>
              <Text>Auth</Text>
              <Input id="auth" placeholder="인증번호를 입력하세요" onChange={(e) => onChange(e)} />
              <IconContainer>{isAuth ? <></> : <IoIosCheckbox size={30} color={IconColor.icYellow} onClick={() => onClick()} />}</IconContainer>
            </InputContainer>
            <InputContainer>
              <Text>ID</Text>
              <Input id="id" disabled={true} placeholder="아이디를 입력하세요" onChange={(e) => onChange(e)} />
            </InputContainer>
            <InputContainer>
              <Text>PW</Text>
              <Input id="password" disabled={true} placeholder="비밀번호를 입력하세요" onChange={(e) => onChange(e)} />
            </InputContainer>
            <InputContainer>
              <Text>Confirm</Text>
              <Input id="phone" disabled={true} placeholder="비밀번호 재확인" onChange={(e) => onChange(e)} />
            </InputContainer>
            <ButtonContainer>
              <Link to="/info">
                <Button>Prev</Button>
              </Link>
              <Button style={{ cursor: 'pointer' }} onClick={() => {}}>
                Sign Up
              </Button>
            </ButtonContainer>
          </SignInContainer>
        </>
      )}
    </Container>
  );
}

export default SignAuthForm;
