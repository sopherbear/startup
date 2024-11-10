import React from 'react';
import './add_recipe.css';

export function Add_recipe() {
    const [recipeName, setRecipeName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ingreds, setIngreds] = React.useState('');
    const [directions, setDirections] = React.useState('');
    const [category, setCategory] = React.useState('');


   async function storeName() {
        localStorage.setItem('recipeName', recipeName);
   }

   async function storeDescription() {
        localStorage.setItem('description', description);
   }

   async function storeIngreds() {
        localStorage.setItem('ingreds', ingreds);
   }

   async function storeDirections() {
        localStorage.setItem('directions', directions)
   }

   async function storeCategory() {
        localStorage.setItem('category', category);
   }


  return(
    <main className="container-fluid text-center">
            <div className='root'>
                <h2 className="text-align: center;">Add a Recipe</h2>
                <div>
                    <span className="input-group-text">What do you want to call this recipe?</span>
                    <input className="form-control" type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Name your recipe!" required/>
                    <div>
                        <span className="input-group-text">Enter a description of the recipe: </span>
                        <textarea className="form-control" type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="E.g.: Granny's apple pie is ..."></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Enter in ingredients and their precise measurements separated by commas: </span>
                        <textarea className="form-control" type="textarea" value={ingreds} onChange={(e) => setIngreds(e.target.value)} placeholder="E.g.: 3/4 cups sugar, 1/2 tsp salt ..." required></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Enter in each step with a number and instruction: </span>
                        <textarea className="form-control" type="textarea" value={directions} onChange={(e) => setDirections(e.target.value)} placeholder="E.g.: 1. Set oven to 350F. 2. Get..." required></textarea>
                    </div>
                    <div>
                        <span className="input-group-text">Categorize recipe:
                            <select id="categories" value={category} onChange={(e) => setCategory(e.target.value)} ClassName="color:black; margin: .3em;">
                                <option >Mains</option>
                                <option>Soups</option>
                                <option>Breads</option>
                                <option>Sides</option>
                                <option>Desserts</option>
                            </select>
                        </span>
                    </div>
                    {/* would need to figue out what handleSubmit would mean non-locally. */}
                    <button type="submit" className="button1" >Submit</button>
                </div>
            </div> 
        </main>
  );
}
