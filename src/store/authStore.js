import { create } from 'zustand';
import auth from '../data/repository/auth';

const authStore = create((set, get) => ({
  signUpData: {
    id: '',
    password: '',
    confirm: '',
    name: '',
    hakbun: '',
    email: '',
  },

  setSignData: (targetId, targetValue) => {
    const signUpData = get().signUpData;
    set({
      signUpData: {
        ...signUpData,
        [targetId]: targetValue,
      },
    });
  },

  verifySignData_1: (navigateToUp) => {
    const signUpData = get().signUpData;
    const nameRegex = /^[가-힣]{2,5}$/;
    const hakbunRegex = /^\d{8}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!signUpData.name) {
      return alert('이름을 입력해주세요 :D');
    }
    if (!nameRegex.test(signUpData.name)) {
      return '정확한 이름 형식을 사용해주세요 :D';
    }
    if (!signUpData.hakbun) {
      return alert('학생 번호를 입력해주세요 :D');
    }
    if (!hakbunRegex.test(signUpData.hakbun)) {
      return alert('학생 번호는 8자리 숫자입니다 :D');
    }
    if (!signUpData.email) {
      return alert('이메일 주소도 입력해주세요 :D');
    }
    if (!emailRegex.test(signUpData.email)) {
      return alert('이메일 형식을 확인해주세요 :D');
    }

    navigateToUp();
  },

  verifySignData_2: async () => {
    const signUpData = get().signUpData;
    const idRegex = /^[A-Za-z0-9]{5,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

    if (!signUpData.name || !signUpData.hakbun || !signUpData.email) {
      window.location.replace('/info');
      return alert('가입 오류가 발생하였습니다 :(');
    }
    if (!signUpData.id) {
      return alert('아이디를 입력해주세요 :D');
    }
    if (!idRegex.test(signUpData.id)) {
      return alert('아이디는 영문 대소문자와 숫자만 사용 가능하게 구성된 5글자 이상이여야 합니다 :D');
    }
    if (!signUpData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    if (!passwordRegex.test(signUpData.password)) {
      return alert('비밀번호는 최소 1개 이상의 영문 대문자와 소문자, 숫자, 특수문자를 포함한 10자리 이상이여야합니다. :D');
    }
    if (signUpData.password !== signUpData.confirm) {
      return alert('비밀번호 재확인이 일치하지 않습니다 :(');
    }
    try {
      /** Test!!! */ console.log(`start axios`);
      await auth.signUp();
      return null;
    } catch (err) {}
  },
}));

export default authStore;
//              /** Test!!! */ console.log(`${}`);
