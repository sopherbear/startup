import React from 'react';
import './recipe.css';

export function Recipe() {
  const [recipe, setRecipe] = React.useState('');
  

  React.useEffect(() => {
    setRecipeName('Yummy Recipe');
    setDescription('I have very fond memories of Yummy Recipe as a child.')
    setIngreds('Peanut Butter, chicken broth, soy sauce. Will separate list later.')
    setDirections('Mix and serve')
  })

  return(
    <main className='container-fluid text-center'>
        {/*<!--All the following information will come from the add_recipe form.-->*/}
      <div className='root'>
      <section id="intro">
          <h2><b>{recipeName}</b></h2>
          <p className='description'><i>{description}</i></p>
          <p className='ingredients'>
            <h4><i>Ingredients:</i></h4>
            <ul>
              <li>{ingreds}</li>
              {/* <li>Ingredient2</li>
              <li>Ingredient3</li>
              <li>Ingredient4</li> */}
            </ul>
          </p>
          <p className='instructions'>
            <h4><i>Instructions:</i></h4>
            <ol>
              <li>{directions}</li>
              {/* <li>Instruction2</li>
              <li>Instruction3</li> */}
            </ol>
          </p>
        </section>
      </div>  
    </main>
  );
}