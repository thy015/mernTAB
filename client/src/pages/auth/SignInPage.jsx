import React, {lazy, Suspense} from 'react';

const SignInRemote = lazy(() => import('remote/SignInPage'));

const SignInPage = () => {
  return (
      <div>
        <Suspense fallback="Loading...">
          <SignInRemote/>
        </Suspense>
      </div>
  );
};

export default SignInPage;