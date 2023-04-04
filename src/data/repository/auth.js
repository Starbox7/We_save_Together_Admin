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
};

export default auth;
//              /** Test!!! */ console.log(`${}`);
