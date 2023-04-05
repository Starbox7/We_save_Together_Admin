import axios from 'axios';

const auth = {
  signUp: async (signData) => {
    try {
      return await axios.post('http://127.0.0.1:5001/auth/signup', signData);
    } catch (err) {
      /** Test!!! */ console.log(`signUp : ${err}`);
      throw new Error('axios Error : signUp');
    }
  },
  signIn: async (signData) => {

    try {
      return await axios.post('http://127.0.0.1:5001/auth/signin', signData)
    } catch (err) {
      throw new Error('axios Error : signIn');
    }
  }
};

export default auth;
//              /** Test!!! */ console.log(`${}`);
