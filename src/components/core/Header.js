import React, { useEffect , useState} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NETFLIX_LOGO , DEFAULT_USER_IMG } from '../../utils/constants';

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUserData, clearUserData } from '../../utils/Slices/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState();
  
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  // useEffect(() =>{
  //   if(userData){
  //     setIsLoggedIn(true);
  //     navigate("/browse")
  //   }else{
  //     setIsLoggedIn(false);
  //     navigate("/")
  //   }
  // },[
  //   userData
  // ])

  const getAuthStatus=()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUserData({accessToken: user.accessToken , email: user.email, uId: user.uid }));
        setIsLoggedIn(true);
        navigate("/browse")
      } else {
        dispatch(clearUserData());
        setIsLoggedIn(false);
        navigate("/")
      }
    });

 
  
  }

  useEffect(()=>{
    getAuthStatus();
  },[])
  return (
    <>  
    <div className='absolute w-full  bg-gradient-to-b from-black z-40 flex justify-between'>
        <img className='w-64 px-8 py-2 ml-10' src={NETFLIX_LOGO} alt='LOGO' ></img>
      {isLoggedIn && <div className='flex '>
      <img className='w-30 h-14  py-2' src={DEFAULT_USER_IMG} alt="user"></img>
      <button className='bg-red-600 text-white m-2 mt-3 rounded-md mr-2 h-9 pl-3 pr-3 font-bold' onClick={()=>handleSignout()}>Signout</button>
      </div> }
        
    </div>
    
    
    </>
    
  )
}

export default Header