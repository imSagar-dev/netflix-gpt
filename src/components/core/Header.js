import React, { useEffect , useState} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const userData = useSelector((store)=>store.user);
  console.log(userData)
  
  const handleSignout = () => {
    console.log('signout clicked');
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() =>{
    if(userData){
      setIsLoggedIn(true);
      navigate("/browse")
    }else{
      setIsLoggedIn(false);
      navigate("/")
    }
  },[
    userData
  ])
  return (
    <>  
    <div className='absolute w-full  bg-gradient-to-b from-black z-40 flex justify-between'>
        <img className='w-64 px-8 py-2 ml-10' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='LOGO' ></img>
      {isLoggedIn && <div className='flex '>
      <img className='w-30 h-14  py-2' src="https://occ-0-7724-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRcEkx5LuzMQxpBS6MmeEgV4LNEA6QmhV9QUl1kekA2sNJsoh6qNkbio2-aycS-g9TlI2UF5kt5upH-NKkyAGP2QhtQemw8.png?r=ac3" alt="user"></img>
      <button className='bg-red-600 text-white m-2 mt-3 rounded-md mr-2 h-9 pl-3 pr-3 font-bold' onClick={()=>handleSignout()}>Signout</button>
      </div> }
        
    </div>
    
    
    </>
    
  )
}

export default Header