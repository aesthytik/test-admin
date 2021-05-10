import React from 'react';
import { gql, useMutation } from '@apollo/client';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthContext from '../utils/AuthContext';



const loginMutation = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      jwt
      user {
        id
        email
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;

function Login() {
  const [checked1, setChecked1] = React.useState(true);
  const { updateAuth } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("vipin@gmail.com");
  const [password, setPassword] = React.useState("12345678");


  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

 

  const [loginAction, { loading, error }] = useMutation(loginMutation, {
    onCompleted: ({ login }) => {
      console.log("updateAuth", login);
      updateAuth(login.user, login.jwt);
    },
  });

  const handleLogin = () => {
    const input = { email, password };
    loginAction({ variables: { input } });
  }

    return (
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
 
           <div className="w-full h-screen bg-blue-600 flex justify-center items-center">
           <div className="mx-auto  max-w-screen-xl ">
           
               <div className="w-96 h-96   "> 
               <h2 class="text-gray-300 text-2xl  font-medium title-font mb-5">Login To Admin</h2>
      <div class="relative mb-4">
        <label for="full-name" className="leading-7 text-sm text-gray-300">Email</label>
        <div className="text-white absolute py-2"><MailOutlineIcon/></div>
        <input type="email" id="email " name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-white border-gray-300  outline-none "/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-300">Password</label>
        <div className="text-white  absolute py-2"><LockOutlinedIcon/></div>
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8  border-b-2 text-white  border-gray-300  outline-none "/>
      </div> 
      <button type="submit" className="text-gray-200 bg-gray-400 border-0 py-2 my-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">{loading ? "Logging In":"Login"}</button>  
      <p className="text-xs text-gray-300 mt-3">Please Enter Your Email And Password</p>
    </div> 




    
               </div>   
               </div>   
        </form>
    )
}

export default Login
