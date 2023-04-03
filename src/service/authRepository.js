import axios from 'axios';
import { create } from 'zustand';

// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:5001/auth',
//   withCredentials: true,
// });

const AuthRepository = create((set) => ({
  isLoading: false,

  user: {
    name: '',
    hakbun: '',
    email: '',
    phone: '',
    id: '',
    password: ''
  },
  number: 0,

  isAuth: false,


  setSignUpData: ({ name, hakbun, email, phone }) => {
    set(state => ({ ...state, isLoading: true }));
    try {
      if (!name || !hakbun || !email || !phone) {
        throw new Error('입력 양식을 충족하지 못합니다.');
      }

      // console.log('start axios')
      // const res = await axios.get(`http://127.0.0.1:5001/auth/sms/${phone}`,
      // {
      // withCredentials: true,
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': 'http://localhost:3000',
      // },
      // }
      //);
      set((state) => ({ ...state, user: { ...state.user, name, hakbun, email, phone } }));
      console.log(`set-sign-up-data`);
      set(state => ({ ...state, isAuth: true }));
      set(state => ({ ...state, number: 9999 }))
      alert(`처리되었습니다`);
      // alert(`${data.phone} : 인증번호가 발송되었습니다.`);
    } catch (err) {
      console.log(err);
      alert(err);
      window.location.replace('/info')
    } finally {
      set(state => ({ ...state, isLoading: false }));
      window.location.replace('/auth');
    }
  },


  // confirmAuthNumber: async (authNum) => {
  //   try {
  //     // const res = await axios.get(`http://127.0.0.1:5001/auth/certificate/${authNum}`,
  //     // {
  //     // withCredentials: true,
  //     // headers: {
  //     //   'Content-Type': 'application/json',
  //     //   'Access-Control-Allow-Origin': 'http://localhost:3000',
  //     // },
  //     // }
  //     // );

  //     // switch (res.data.status) {
  //     //   case 200:
  //     //     set(() => ({ isAuth: true }));
  //     //     alert('인증되었습니다');
  //     //     break;
  //     //   case 404:
  //     //     set(() => ({ isAuth: false }));
  //     //     alert('인증번호가 만료되었습니다.');
  //     //     window.location.replace('/info');
  //     //     break;
  //     //   default:
  //     //     set(() => ({ isAuth: false }));
  //     //     alert(`인증번호가 일치하지 않습니다`);
  //     //     window.location.replace('/info');
  //     //     break;
  //     // }
  //     set(state => ({ ...state, isAuth: true }));
  //   } catch (err) {
  //     set(state => ({ ...state, isAuth: false }));
  //     alert(`인증번호가 일치하지 않습니다`);
  //     window.location.replace('/info');
  //   }
  // },
  signUp: async (data) => {
    // data = {
    //   ...data, 

    // }
    console.log(`start signup : ${data.name}`)
    try {
      const res = await axios.post(`http://127.0.0.1:5001/auth/register`, data)
      alert('회원가입 완료!')
      window.location.replace('/in');
    } catch (err) {
      alert('가입할 수 없는 정보입니다.')
      // window.location.replace('/info');
    } finally {

    }
  }



  // isAuth: false,
  // checkAuthNumber: (authNumber, authNum) => {
  //   set(() => ({
  //     isAuth: compare(authNumber, authNum),
  //   }));
  // },
  //   isAuth: false,

  //   sms: async (phone) => {
  //     try {
  //       await axios.get(`http://127.0.0.1:5001/auth/sms/${phone}`);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  //   certificate: async (phone, number) => {
  //     try {
  //       await axios.get(`http://127.0.0.1:5001/auth/certificate/${phone}/${number}`);
  //       set(() => ({ isAuth: true }));
  //     } catch (err) {
  //       set(() => ({ isAuth: false }));
  //       console.log(err);
  //     } finally {
  //       console.log(set((state) => ({ ...state.isAuth })));
  //     }
  //   },
  //   register: async (formData) => {
  //     try {
  //       await axios.put(`http://127.0.0.1:5001/auth/register`, formData);
  //       set(() => ({ isAuth: false }));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
}));

export default AuthRepository;
