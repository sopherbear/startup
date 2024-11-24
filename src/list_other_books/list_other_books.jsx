import React from 'react';
import './list_other_books.css';
import { NavLink } from 'react-router-dom';

export function List_other_books() {
  {/*Lets me know when the state of these has changed so I can update the terms. RN they are placeholders. */}
  const [otherBookNames, setOtherBookNames] = React.useState([]);


  React.useEffect(() => {
      fetch('/api/bookNames')
        .then((response) => response.json())
        .then((data) => setOtherBookNames(data))
  }, []);

  return (
    <main className='container-fluid text-center'>
      <div className='root'>
      <h2>Other Recipe Books</h2>
            <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
              {/*Code creates an instance of card for every item in the list, so I will need to make sure that only 4 get displayed at any time.*/}
                {otherBookNames.length > 0 ? (
                  otherBookNames.map((book, index) => (
                <div className="card" key={index}>
                  {/* aria-label makes it possible for each  */}
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                      {/* book is the particular item at the index in otherBookNames, and I call the otherBookName attribute to be the label */}
                      <title>{book.otherBookName}</title>
                      <rect width="100%" height="100%" fill="darkslategray"></rect>
                    </svg>
            
                    <div className="card-body" key={index}>
                      <h5 className="card-title">{book.otherBookName}</h5>
                      <NavLink to="/other_book" className="btn btn-primary">View {book.otherBookName}</NavLink>
                    </div>
                </div>
                
                // <div className="card" key={index}>
                //     <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                //       <title>Book1</title>
                //       <rect width="100%" height="100%" fill="darkslategray"></rect>
                //     </svg>
                //     <div className="card-body">
                //       <h5 className="card-title">{otherBookName[1].otherBookName}</h5>
                //       <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[1].otherBookName}</NavLink>
                //     </div>
            
                // </div>
                

                 
                // <div className="card">
                //     <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                //       <title>Book1</title>
                //       <rect width="100%" height="100%" fill="darkslategray"></rect>
                //     </svg>
                //     <div className="card-body">
                //       <h5 className="card-title">{otherBookNames[2].otherBookName}</h5>
                //       <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[2].otherBookName}</NavLink>
                //     </div>
                // </div>
                

                
                // <div className="card">
                //     <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                //       <title>Book1</title>
                //       <rect width="100%" height="100%" fill="darkslategray"></rect>
                //     </svg>
                //     <div className="card-body">
                //       <h5 className="card-title">{otherBookNames[3].otherBookName}</h5>
                //       <NavLink to="/other_book" className="btn btn-primary">{otherBookNames[3].otherBookName}</NavLink>
                //     </div>
                // </div>
                  ))): (
                  <p>loading . . .</p>
                )}
            </div>    
      </div>
    </main>
  );
}