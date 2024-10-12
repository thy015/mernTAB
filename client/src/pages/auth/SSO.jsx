import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const SSO = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('Token');
    if (token) {
      console.log(token);
    }
  }, [searchParams]);

  return (
    <div>
      Loading SSO Authentication...
    </div>
  )
}

export default SSO
