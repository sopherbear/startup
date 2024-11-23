import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Add_recipe } from './add_recipe/add_recipe';
import { Create_book } from './create_book/create_book';
import { List_other_books } from './list_other_books/list_other_books';
import { My_book } from './my_book/my_book';
import { Other_book } from './other_book/other_book';
import { Recipe } from './recipe/recipe';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
  <BrowserRouter>
    <div className='body'>
     <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
              <div className="navbar-brand">Family Recipe Book</div>
              <menu className="navbar-nav">
                <li className="nav-item">
                    {/* Initially had "login" in the "to" */}
                    <NavLink className="nav-link" to=''>Home</NavLink>
                </li>
                {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='my_book'>
                    My Book
                  </NavLink>
                </li>
              )}
                {authState === AuthState.Authenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='list_other_books'>
                      Other Books
                    </NavLink>
                  </li>
              )}
                {authState === AuthState.Authenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='create_book'>
                      Create Book
                    </NavLink>
                  </li>
              )}
              </menu>
            </nav>
        </header>
        
        <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/add_recipe' element={<Add_recipe />} />
          <Route path='/create_book' element={<Create_book />} />
          <Route path='/list_other_books' element={<List_other_books />} />
          <Route path='/my_book' element={<My_book />} />
          <Route path='/other_book' element={<Other_book />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        
        <footer className='footer'>
            <div className="container-fluid">
                <span className="text-reset">Sophie Larsen</span>
                <a className="text-reset" href="https://github.com/sopherbear/startup.git">Github</a>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </div>
  </BrowserRouter>
  );
}


function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;