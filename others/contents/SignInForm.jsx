// import React, { useState } from "react";
// import styled from "styled-components";

// export const Container = styled.div`
//   max-width: 600px;
//   margin: 270px auto;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 5px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 18px;
//   font-weight: bold;
//   margin-top: 15px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
//   &:focus {
//     border-color: #0077b6;
//   }
// `;

// const ErrorMessage = styled.span`
//   color: red;
//   font-size: 14px;
//   margin-top: 5px;
// `;

// const EyeIcon = styled.span`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 18px;
//   cursor: pointer;
// `;

// const Button = styled.button`
//   background-color: #0077b6;
//   color: #fff;
//   font-size: 18px;
//   font-weight: bold;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   margin-top: 15px;
//   cursor: pointer;
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;
// const InputWrapper = styled.div`
//   position: relative;
// `;

// export default function SignInForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateInput(name, value);
//   };

//   const validateInput = (name, value) => {
//     let newErrors = { ...errors };

//     switch (name) {
//       case "email":
//         const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//         if (!emailRegex.test(value)) {
//           newErrors.email = "올바른 이메일 형식이 아닙니다.";
//         } else {
//           delete newErrors.email;
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors(newErrors);
//   };

//   const togglePasswordVisibility = (e) => {
//     e.preventDefault();
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 여기에 로그인 처리 로직을 구현하세요
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Label htmlFor="email">이메일</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

//         <Label htmlFor="password">비밀번호</Label>
//         <InputWrapper>
//           <Input
//             id="password"
//             name="password"
//             type={passwordVisible ? "text" : "password"}
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <EyeIcon onClick={togglePasswordVisibility}>
//             {passwordVisible ? "👁️" : "🙈"}
//           </EyeIcon>
//         </InputWrapper>

//         <Button type="submit" disabled={Object.keys(errors).length > 0}>
//           로그인
//         </Button>
//       </Form>
//       <div>
//         <a href="/find-id">아이디 찾기</a>
//         <a
//           href="/find-password"
//           style={{
//             marginLeft: "10px",
//           }}
//         >
//           비밀번호 찾기
//         </a>
//       </div>
//     </Container>
//   );
// }
