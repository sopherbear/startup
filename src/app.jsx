import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className='body bg-dark text-light'>
     <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
              <a class="navbar-brand">Family Recipe Book</a>
              <menu class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">             
                    <a class="nav-link" href="my_book.html" >My Book</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="list_other_books.html"> Other Books</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="create_book.html">Create Book</a>
                </li>
              </menu>
            </nav>
        </header>
        
        <main>App components here</main>

        <footer>
            <div class="container-fluid">
                <span class="text-reset">Sophie Larsen</span>
                <a class="text-reset" href="https://github.com/sopherbear/startup.git">Github</a>
            </div>
        </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </div>;
}