import React from 'react';
import { NavLink } from 'react-router-dom';

export function Other_book() {
  return(
    <main className='container-fluid text-center'>
    <section>
        <div>
            {/*<!--Need to put placeholder for whatever they name their recipebook-->*/}
            <h2>Other Recipe Book</h2>
            {/*<!--NEED TO ADD A TEXT LABEL FOR THE PICTURE and make sure the picture is the same as on the other pages.-->*/}
            <img src="pictures/pexels-dana-tentis-118658-262959.jpg" alt="My Recipe Book"/>
            <figcaption>PLACEHOLDER FOR BOOK NAME</figcaption>
        </div>
    </section>
    <section>
        <div className="bd-example">
            <div className="accordion" id="accordionPanelsOpen">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Mains:
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div style={{ color: 'black', margin: '0.3em' }}>
                                <div>
                                    <NavLink to="/recipe">Recipe1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/recipe">Recipe2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                            Soups:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div style={{ color: 'black', margin: '0.3em' }}>
                                <div>
                                    <NavLink to="/recipe">Recipe1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/recipe">Recipe2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Breads:
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div style={{ color: 'black', margin: '0.3em' }}>
                                <div>
                                    <NavLink to="/recipe">Recipe1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/recipe">Recipe2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Sides:
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div style={{ color: 'black', margin: '0.3em' }}>
                                <div>
                                    <NavLink to="/recipe">Recipe1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/recipe">Recipe2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Desserts:
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div style={{ color: 'black', margin: '0.3em' }}>
                                <div>
                                    <NavLink to="/recipe">Recipe1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/recipe">Recipe2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div> 
    </section>
</main>
  );
}