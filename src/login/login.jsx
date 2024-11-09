import React from 'react';

import { Unauthenticated } from './unauthenticated'
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login( {userName, authState, onAuthChange }) {
  return(
    <main className='container-fluid text-center'>
    <div className='root'>
        {/*  the other code had a header in the following line as well, but I think it will write in the other one.  */}
       {authState !== AuthState.Unknown && <h1>Welcome to Family Recipe Book!</h1>}
       {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
       )}
       {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
    </div>
</main>
  );
}