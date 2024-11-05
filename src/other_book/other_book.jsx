import React from 'react';

export function Other_book() {
  return(
    <main>
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
        <div class="bd-example">
            <div class="accordion" id="accordionPanelsOpen">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Mains:
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select style="color:black; margin: .3em;">
                                <option>
                                    <a href="recipe.html">Recipe1</a>
                                </option>
                                <option>
                                    <a href="recipe.html">Recipe2</a>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                            Soups:
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select style="color:black; margin: .3em;">
                                <option>
                                    <a href="recipe.html">Recipe1</a>
                                </option>
                                <option>
                                    <a href="recipe.html">Recipe2</a>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Breads:
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select style="color:black; margin: .3em;">
                                <option>
                                    <a href="recipe.html">Recipe1</a>
                                </option>
                                <option>
                                    <a href="recipe.html">Recipe2</a>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Sides:
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select style="color:black; margin: .3em;">
                                <option>
                                    <a href="recipe.html">Recipe1</a>
                                </option>
                                <option>
                                    <a href="recipe.html">Recipe2</a>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Desserts:
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <select style="color:black; margin: .3em;">
                                <option>
                                    <a href="recipe.html">Recipe1</a>
                                </option>
                                <option>
                                    <a href="recipe.html">Recipe2</a>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
              </div>
            </div> 
    </section>
</main>
  );
}