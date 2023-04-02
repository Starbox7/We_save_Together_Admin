import axios from 'axios';
import { create } from 'zustand';

const AuthRepository = create((set) => ({
  isLoading: false,

  name: '',
  hakbun: '',
  email: '',
  phone: '',

  setSignUpData: async (signUpData) => {
    set(() => ({ isLoading: true }));
    try {
      if (!signUpData.name || !signUpData.hakbun || !signUpData.email || !signUpData.phone) {
        throw new Error('입력 양식을 충족하지 못합니다.');
      }
      set(() => ({
        name: signUpData.name,
        hakbun: signUpData.hakbun,
        email: signUpData.email,
        phone: signUpData.phone,
      }));

      await axios.get(`http://127.0.0.1:5001/auth/sms/${signUpData.phone}`, {
        withCredentials: true,
      });
      alert(`${signUpData.phone} : 인증번호가 발송되었습니다.`);
      window.location.replace('/auth');
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
      set(() => ({ isLoading: false }));
    }
  },

  isAuth: false,
  confirmAuthNumber: async (authNum) => {
    try {
      const res = await axios.get(`http://127.0.0.1:5001/auth/certificate/${authNum}`, {
        withCredentials: true,
      });

      switch (res.status) {
        case 200:
          set(() => ({ isAuth: true }));
          alert('인증되었습니다');
          break;
        case 404:
          set(() => ({ isAuth: false }));
          alert('인증번호가 만료되었습니다.');
          window.location.replace('/info');
          break;
        default:
          set(() => ({ isAuth: false }));
          alert(`인증번호가 일치하지 않습니다`);
          window.location.replace('/info');
          break;
      }
    } catch (err) {
      set(() => ({ isAuth: false }));
      alert(`인증번호가 일치하지 않습니다`);
      window.location.replace('/info');
    }
  },

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
