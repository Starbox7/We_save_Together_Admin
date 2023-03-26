import React, { useState } from 'react';
import styled from 'styled-components';
import AuthRepository from '../services/AuthRepository';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #0077b6;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #0077b6;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export default function SignUpForm() {
  const { isAuth, sms, certificate, register } = AuthRepository();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    studentId: '',
    phone: '',
    verificationCode: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'email':
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(value)) {
          newErrors.email = '올바른 이메일 형식이 아닙니다.';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordRegex.test(value)) {
          newErrors.password = '비밀번호는 최소 8자, 대문자 1개, 숫자 1개, 특수문자 1개를 포함해야 합니다.';
        } else {
          delete newErrors.password;
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        } else {
          delete newErrors.confirmPassword;
        }
        break;
      case 'name':
        const nameRegex = /^[가-힣]{2,3}$/;
        if (!nameRegex.test(value)) {
          newErrors.name = '이름은 한글 2~3자여야 합니다.';
        } else {
          delete newErrors.name;
        }
        break;
      case 'studentId':
        const studentIdRegex = /^\d{8}$/;
        if (!studentIdRegex.test(value)) {
          newErrors.studentId = '학번은 8자리여야 합니다.';
        } else {
          delete newErrors.studentId;
        }
        break;
      case 'phone':
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(value)) {
          newErrors.phone = '전화번호는 11자리여야 합니다.';
        } else {
          delete newErrors.phone;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [verificationCodeConfirmed, setVerificationCodeConfirmed] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const sendVerificationCode = (e) => {
    e.preventDefault();
    // 여기에 전화번호로 인증번호를 발송하는 로직을 구현하세요
    sms(formData.phone);

    // 인증번호 발송 성공 시, verificationCodeSent 상태를 true로 변경
    setVerificationCodeSent(true);
  };

  const verifyCode = (e) => {
    e.preventDefault();
    // 여기에 인증번호 확인 로직을 구현하세요
    certificate(formData.phone, formData.verificationCode);

    // 인증번호 확인 성공 시, verificationCodeConfirmed 상태를 true로 변경
    setVerificationCodeConfirmed(isAuth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 처리 로직을 구현하세요
    register(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label htmlFor="password">비밀번호</Label>
        <InputWrapper>
          <Input id="password" name="password" type={passwordVisible ? 'text' : 'password'} value={formData.password} onChange={handleChange} />
          <EyeIcon onClick={togglePasswordVisibility}>{passwordVisible ? '👁️' : '🙈'}</EyeIcon>
        </InputWrapper>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <InputWrapper>
          <Input id="confirmPassword" name="confirmPassword" type={confirmPasswordVisible ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} />
          <EyeIcon onClick={toggleConfirmPasswordVisibility}>{confirmPasswordVisible ? '👁️' : '🙈'}</EyeIcon>
        </InputWrapper>
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

        <Label htmlFor="name">이름</Label>
        <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Label htmlFor="studentId">학번</Label>
        <Input id="studentId" name="studentId" type="text" value={formData.studentId} onChange={handleChange} />
        {errors.studentId && <ErrorMessage>{errors.studentId}</ErrorMessage>}

        <Label htmlFor="phone">전화번호</Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

        <Button type="button" onClick={sendVerificationCode} disabled={Object.keys(errors).length > 0}>
          인증번호 발송
        </Button>

        <Label htmlFor="verificationCode">인증번호</Label>
        <Input id="verificationCode" name="verificationCode" type="text" value={formData.verificationCode} onChange={handleChange} disabled={!verificationCodeSent} />

        <Button type="button" onClick={verifyCode} disabled={!formData.verificationCode}>
          인증번호 확인
        </Button>

        <Button type="submit" disabled={Object.keys(errors).length > 0 || !formData.verificationCode || !verificationCodeConfirmed}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
}
