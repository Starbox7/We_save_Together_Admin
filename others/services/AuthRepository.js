// import { create } from 'zustand';
// import axios from 'axios';

// const AuthRepository = create((set) => ({
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
//       console.log();
//       await axios.get(`http://127.0.0.1:5001/auth/certificate/${phone}/${number}`);
//       set(() => ({ isAuth: true }));
//     } catch (err) {
//       set(() => ({ isAuth: false }));
//       console.log(err);
//     } finally {
//       // set((state) => ({ ...state.isAuth }));
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
// }));

// export default AuthRepository;
