import React, {lazy, Suspense} from 'react';

const SignInRemote = lazy(() => import('remote/SignInPage'));
const SignUpRemote=lazy(()=>import('remote/SignUpPage'))
const SignInPage = () => {
  return (
      <div>
        <Suspense fallback="Loading...">
          <SignInRemote/>
        </Suspense>
      </div>
  );
};
const SignUpPage = () => {
  return (
      <div>
        <Suspense fallback="Loading...">
         <SignUpRemote></SignUpRemote>
        </Suspense>
      </div>
  );
};

export{SignInPage,SignUpPage}