import React, { useEffect } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const SSO = () => {
  const [searchParams] = useSearchParams();
    const navigate=useNavigate()

    useEffect(() => {
      const token = searchParams.get('Token');
      if (token) {
        const verifyToken = async () => {
          try {
            const res = await axios.post('http://localhost:4000/api/oauth/verify', {}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
    
            console.log('Token verified', res.data.payload);
            
            if (res.data.navigateTo) {
              navigate(res.data.navigateTo);
            }
    
          } catch (error) {
            console.error('Error passing data', error.message);
          }
        };
    
        verifyToken(); 
      }
    }, [searchParams, navigate]);
    
  return (
    <>
    <style>
        {`
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 4px #00FFFF; }
            50% { text-shadow: 0 0 40px #00FFFF; }
          }
        `}
      </style>
    <div className='bg-black h-screen w-screen flex justify-center items-center flex-col'>
      <img src='https://i.redd.it/ubbi1p7z7euc1.gif' alt='Loading' />
      <div className='text-2xl font-bold text-[#00FFFF]' style={{animation: 'glow 2s ease-in-out infinite'}}>
        Loading SSO Authentication...
      </div>
    </div>
    </>
  )
}

export default SSO
