import React from 'react';
import { NavLink } from 'react-router-dom';
import './my_book.css'
import { Accordion } from 'react-bootstrap';

export function My_book(props) {
    //The following block lets us get urls for the random images we will eventually use.
  const [imageUrl, setImageUrl] = React.useState('');
  //initializes the bookName and function we will use to get bookName
  const [bookName, setBookName] = React.useState('Loading...');
  //initializes recipe and the function to get recipe.
  const [recipes, setRecipes] = React.useState([])


  //we provide empty dependency list at the end so that it only renders the first time that the component is created
  React.useEffect(() => {
    console.log()
    setImageUrl(`./pictures/pexels-ash-craig-122861-376464.jpg`);
    fetch('/api/bookName')
        .then((response) => response.json())
        .then((bookName) => {
            setBookName(bookName.bookName)
        })
  }, []);

  React.useEffect(() => {
    console.log("getting Recipes")
    fetch('/api/recipes')
    .then((response) => response.json())
    .then((data) => setRecipes)
    console.log(recipes)
  }, []);





  return(
    <main className='container-fluid text-center'>
      <section className='root'>
          <div>
            <h2>My Recipe Book</h2>
            {/*<!--NEED TO ADD A TEXT LABEL FOR THE PICTURE and make sure the picture is the same as on the other pages.-->*/}
            <img src={imageUrl} alt="Food Image"/>
            <figcaption>{bookName}</figcaption>
            <NavLink to="/add_recipe" className="btn btn-primary">Click Here to Add a Recipe!</NavLink>
          </div>
        </section>

      <section className='root'>
        <div className="bd-example">
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Mains</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                            <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                            <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Soups</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                                <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                                <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Breads</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                                <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                                <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Sides</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                                <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                                <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Desserts</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                                <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                                <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Drinks</Accordion.Header>
                    <Accordion.Body>
                        <div style={{color: 'black', margin: '0.3em'}}>
                            <div>
                                <NavLink to='/recipe'>Recipe 1</NavLink>
                            </div>
                            <div>
                                <NavLink to='/recipe'>Recipe 2</NavLink>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </section>
</main>
  );
}