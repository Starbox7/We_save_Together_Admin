import { create } from 'zustand';
import auth from '../data/repository/auth';

const authStore = create((set, get) => ({
  signData: {
    id: '',
    password: '',
    confirm: '',
    name: '',
    hakbun: '',
    email: '',
  },
  isLoading: false,

  setSignData: (targetId, targetValue) => {
    const signData = get().signData;
    set({
      signData: {
        ...signData,
        [targetId]: targetValue,
      },
    });
  },

  verifySignData_1: (navigateToUp) => {
    const signData = get().signData;
    const nameRegex = /^[가-힣]{2,5}$/;
    const hakbunRegex = /^\d{8}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!signData.name) {
      return alert('이름을 입력해주세요 :D');
    }
    if (!nameRegex.test(signData.name)) {
      return alert('정확한 이름 형식을 사용해주세요 :D');
    }
    if (!signData.hakbun) {
      return alert('학생 번호를 입력해주세요 :D');
    }
    if (!hakbunRegex.test(signData.hakbun)) {
      return alert('학생 번호는 8자리 숫자입니다 :D');
    }
    if (!signData.email) {
      return alert('이메일 주소도 입력해주세요 :D');
    }
    if (!emailRegex.test(signData.email)) {
      return alert('이메일 형식을 확인해주세요 :D');
    }

    navigateToUp();
  },

  /** sign up */
  verifySignData_2: async () => {
    const signData = get().signData;
    const idRegex = /^[A-Za-z0-9]{5,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

    if (!signData.name || !signData.hakbun || !signData.email) {
      window.location.replace('/info');
      return alert('가입 오류가 발생하였습니다 :(');
    }
    if (!signData.id) {
      return alert('아이디를 입력해주세요 :D');
    }
    if (!idRegex.test(signData.id)) {
      return alert('아이디는 영문 대소문자와 숫자만 사용 가능하게 구성된 5글자 이상이여야 합니다 :D');
    }
    if (!signData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    if (!passwordRegex.test(signData.password)) {
      return alert('비밀번호는 최소 1개 이상의 영문 대문자와 소문자, 숫자, 특수문자를 포함한 10자리 이상이여야합니다. :D');
    }
    if (signData.password !== signData.confirm) {
      return alert('비밀번호 재확인이 일치하지 않습니다 :(');
    }
    const newSignData = {
      id: signData.id,
      password: signData.password,
      name: signData.name,
      hakbun: signData.hakbun,
      email: signData.email,
    };
    set({
      isLoading: true,
    });
    try {
      await auth.signUp(newSignData);
      window.location.replace('/in');
      return alert('회원가입 성공!');
    } catch (err) {
      /** Test!!! */ console.log(`verifySignData_2 : ${err}`);
      set({
        isLoading: false,
      });
      window.location.replace('/info');
      return alert('axios Error : signup');
    }
  },
  /** sign in */
  verifySignData_3: async () => {
    const signData = get().signData;

    if (!signData.id) {
      return alert('아이디를 입력해주세요 :D');
    }
    if (!signData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    const newSignData = {
      ...signData,
      id: signData.id,
      password: signData.password,
    };
    set({
      isLoading: true,
    });
    try {
      // await auth.signUp(newSignData);
      window.location.replace('/');
      return alert('로그인 성공!');
    } catch (err) {
      /** Test!!! */ console.log(`verifySignData_3 : ${err}`);
      set({
        isLoading: false,
      });
      window.location.replace('/in');
      return alert('axios Error : signin');
    }
  },
}));

export default authStore;
//              /** Test!!! */ console.log(`${}`);
