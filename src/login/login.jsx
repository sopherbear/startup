import React from 'react';

export function Login() {
  return(
    <main class="container-fluid text-center">
    <div>
        <h2>Welcome to Family Recipe Book!</h2>
        <form method="get" action="#" actiones="#">
            <div class="input-group mb-3">
                <span class="input-group-text">Username: </span>
                <input class="form-control" type="text" placeholder="Your username here" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Email:</span>
                <input class="form-control" type="text" placeholder="@youremail.com" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Password:</span>
                <input class="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" class="button1">Log in</button>
            <button type="submit" class="button2">Create Account</button>
        </form>
    </div>
</main>
  )
}