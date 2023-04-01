import { create } from 'zustand';
import axios from 'axios';

const AuthRepository = create((set) => ({

  isLoading: false,
  confirmAdmin: async (confirmData) => {
    set(() => ({ isLoading: true }));
    try {
      await axios.post(`http://127.0.0.1:5001/auth/confirm`, confirmData);
      window.location.replace('/');
    } catch (err) {
      console.log(err);
      alert('승인된 어드민 정보가 아닙니다.');
    } finally {
      set(() => ({ isLoading: false }));
    }
  },

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