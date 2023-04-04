import axios from "axios";

const auth = {
  signUp: async (signUpData) => {
    try {
      return await axios.post('http://127.0.0.1:5001/auth/signup', signUpData);
    } catch (err) {
      /** Test!!! */ console.log(`signUp : ${err}`);
    }


    /** Test!!! */ return console.log(`here is auth Repository`);
  },
};

export default auth;
//              /** Test!!! */ console.log(`${}`);