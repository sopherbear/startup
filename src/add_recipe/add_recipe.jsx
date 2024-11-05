import React from 'react';

export function Add_recipe() {
  return(
    <main className="container-fluid text-center">
            <div>
                <h2 style="text-align: center;">Add a Recipe</h2>
                <form action="#" method="get">
                    <span className="input-group-text">What do you want to call this recipe?</span>
                    <input className="form-control" type="text" placeholder="Name your recipe!" required/>
                    <div>
                        <span className="input-group-text">Enter a description of the recipe: </span>
                        <textarea className="form-control" type="textarea" id="describe" name="var_describe" placeholder="E.g.: Granny's apple pie is ..."></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Enter in ingredients and their precise measurements separated by commas: </span>
                        <textarea className="form-control" type="textarea" id="ingredients" name="var_ingredients" placeholder="E.g.: 3/4 cups sugar, 1/2 tsp salt ..." required></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Enter in each step with a number and instruction: </span>
                        <textarea className="form-control" type="textarea" id="instructions" name="var_instructions" placeholder="E.g.: 1. Set oven to 350F. 2. Get..." required></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Categorize recipe:
                            <select id="categories" name="var_categories" style="color:black; margin: .3em;">
                                <option >Mains</option>
                                <option>Soups</option>
                                <option>Breads</option>
                                <option>Sides</option>
                                <option>Desserts</option>
                            </select>
                        </span>
                    </div>
                    <button type="submit" class="button1">Submit</button>
                </form>
            </div> 
        </main>
  );
}
