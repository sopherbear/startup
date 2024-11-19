import React from 'react';
import './list_other_books.css';
import { NavLink } from 'react-router-dom';

export function List_other_books() {
  const [otherBookNames, setOtherBookNames] = React.useState([{otherBookName: "Placeholderbook1"}]);


  React.useEffect(() => {
      fetch('/api/otherBookNames')
        .then((response) => response.json())
        .then((data) => setOtherBookNames(data))
  }, []);

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
                      <h5 className="card-title">{otherBookNames[0].otherBookName}</h5>
                      <NavLink to="/other_book" className="btn btn-primary">View {otherBookNames[0].otherBookName}</NavLink>
                    </div>
                </div>
                
            

                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">{otherBookNames[1]}</h5>
                      <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[1]}</NavLink>
                    </div>
            
                </div>

                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">{otherBookNames[2]}</h5>
                      <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[2]}</NavLink>
                    </div>
            
                </div>
                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Book1</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">{otherBookNames[3]}</h5>
                      <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[3]}</NavLink>
                    </div>
                </div>
            </div>    
      </div>
    </main>
  );
}