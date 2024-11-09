import React from 'react';
import './list_other_books.css';
import { NavLink } from 'react-router-dom';

export function List_other_books() {
  return (
    <main className='container-fluid text-center'>
      <div className='root'>
      <h2>Other Recipe Books</h2>
            <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
            
                    <div className="card-body">
                      <h5 className="card-title">Book1</h5>
                      <p className="card-text">Recipebook by User</p>
                      <NavLink to="/other_book" className="btn btn-primary">Recipebook 1</NavLink>
                    </div>
                </div>
                
            

                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Book1</h5>
                      <p className="card-text">Recipebook by User</p>
                      <NavLink to="/other_book" className="btn btn-primary">Recipebook 1</NavLink>
                    </div>
            
                </div>

                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Book1</h5>
                      <p className="card-text">Recipebook by User</p>
                      <NavLink to="/other_book" className="btn btn-primary">Recipebook 1</NavLink>
                    </div>
            
                </div>
                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Book1</h5>
                      <p className="card-text">Recipebook by User</p>
                      <NavLink to="/other_book" className="btn btn-primary">Recipebook 1</NavLink>
                    </div>
                </div>
            </div>    
      </div>
    </main>
  );
}