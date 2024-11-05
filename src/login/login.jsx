import React from 'react';

export function Login() {
  return(
    <main className='container-fluid bg-secondary text-center'>
    <div>
        <h2>Welcome to Family Recipe Book!</h2>
        <form method="get" action="#" actiones="#">
            <div className="input-group mb-3">
                <span className="input-group-text">Username: </span>
                <input className="form-control" type="text" placeholder="Your username here" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email:</span>
                <input className="form-control" type="text" placeholder="@youremail.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password:</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" className="button1">Log in</button>
            <button type="submit" className="button2">Create Account</button>
        </form>
    </div>
</main>
  );
}