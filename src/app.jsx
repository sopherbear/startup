import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return (
  <BrowserRouter>
    <div className='body bg-dark text-light'>
     <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
              <a className="navbar-brand">Family Recipe Book</a>
              <menu className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">             
                    <a className="nav-link" href="my_book.html" >My Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="list_other_books.html"> Other Books</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="create_book.html">Create Book</a>
                </li>
              </menu>
            </nav>
        </header>
        
        <main>App components here</main>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Sophie Larsen</span>
                <a className="text-reset" href="https://github.com/sopherbear/startup.git">Github</a>
            </div>
        </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>
  </BrowserRouter>
  );
}