import React, { useRef, useState } from "react";
import Header from "../core/Header";
import { validateLogin } from "../../utils/validator";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../../utils/firebase";
import {  useNavigate} from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate()
  const [error , setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleClick =async ()=>{
    
    const isValidate = validateLogin(email.current.value , password.current.value);
    setError(isValidate);
    console.log('isValidate', isValidate)

    if(!error){

      if(!isSignInForm){
        //Signup User
        try {
          const response = await createUserWithEmailAndPassword(auth, email.current.value , password.current.value);
          //Signup success
          if(response.user) navigate('/browse');
          
        } catch (error) {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setError({field:'global' , msg: errorMessage})
        }
      }else{
        //sign in user
        try {
          const response = await signInWithEmailAndPassword(auth,  email.current.value , password.current.value);
          // Signed in success 
          if(response.user) navigate('/browse');
        } catch (error) {
          console.log('error', error);
          const errorMessage = error.message;
          setError({field:'global' , msg: error.code === 400 ? 'Invalid email or password ' :errorMessage})
        }
      }
      
      
    }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <div className="relative flex h-screen items-center justify-center ">
          <img
            className="absolute"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
            alt="BACKGROUND"
          />

          <div className="absolute  z-30 text-center justify-center w-3/12   rounded-md bg-[#000000B3]">
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex  flex-col p-10 mb-5">
              <h4 className="font-bold text-2xl text-center mt-4 pl-4 text-white">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h4>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="mt-6 p-5 rounded-md bg-[#000000B3] border border-gray-400 select-none text-white"
                />
              )}
              
              <input
                ref={email}
                type="text"
                placeholder="Enter Email"
                className={`${(error && error?.field === 'email') ? 'border-red-600' : 'border-gray-400'} mt-6 p-5 rounded-md bg-[#000000B3] border  select-none text-white` }
              />
              {error && error?.field === 'email' && <p className="bg-red-600 rounded-md text-white text-left p-1  text-xs">{error?.msg}</p>}
              <input
              ref={password}
                type="password"
                placeholder="Enter Password"
                className={`${(error && error?.field === 'password') ? 'border-red-600' : 'border-gray-400'} mt-4 p-5 rounded-md bg-[#000000B3] border  select-none text-white ` }
              />
               {error && error?.field === 'password' && <p className="bg-red-600 rounded-md text-white text-left p-1  text-xs">{error?.msg}</p>}

               {error && error?.field === 'global' && <p className="bg-red-600 rounded-md text-white text-left p-1  text-xs">{error?.msg}</p>}

              <button className="mt-6 p-2  text-center bg-red-500 text-white rounded-md " onClick={()=>handleClick()} >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              {isSignInForm ? (
                <p className="text-white mt-6">
                  New to Netflix?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      toggleSignInForm();
                    }}
                  >
                    Sign up now.
                  </span>
                </p>
              ) : (
                <p className="text-white mt-6">
                  Already Registered?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      toggleSignInForm();
                    }}
                  >
                    Sign in now.
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
