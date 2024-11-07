import React from 'react';
import './recipe.css';

export function Recipe() {
  return(
    <main className='container-fluid text-center'>
        {/*<!--All the following information will come from the add_recipe form.-->*/}
        <section id="intro">
          <p><b>Placeholder Recipe Name</b></p>
          <p><i>Placeholder recipe description</i></p>
        </section>
        <section id="ingredients">
          <p>
            <ul>
              <li>Ingredient1</li>
              <li>Ingredient2</li>
              <li>Ingredient3</li>
              <li>Ingredient4</li>
            </ul>
          </p>
        </section>
        <section id="instructions">
          <p>
            <ol>
              <li>instruction</li>
              <li>instruction</li>
              <li>instruction</li>
              <li>instruction</li>
            </ol>
          </p>
        </section>
      </main>
  );
}