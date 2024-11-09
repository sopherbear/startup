import React from 'react';
import { NavLink } from 'react-router-dom';
import './other_book.css';
import { Accordion } from 'react-bootstrap';

export function Other_book() {
    //The following block lets us get urls for the random images we will eventually use.
  const [imageUrl, setImageUrl] = React.useState('');
  //the following line initializes a state variable called quote, which will be updated by a function called setQuote, which is called later on.
  const [bookName, setBookName] = React.useState('Loading...');

  //we provide empty dependency list at the end so that it only renders the first time that the component is created
  React.useEffect(() => {
    setImageUrl(`./pictures/pexels-dana-tentis-118658-262959.jpg`);
    setBookName('Rando\'s Recipes');
  }, []);

  return(
    <main className='container-fluid text-center'>
      <section className='root'>
          <div>
            <h2>My Recipe Book</h2>
            {/*<!--NEED TO ADD A TEXT LABEL FOR THE PICTURE and make sure the picture is the same as on the other pages.-->*/}
            <img src={imageUrl} alt="Food Image"/>
            <figcaption>{bookName}</figcaption>
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