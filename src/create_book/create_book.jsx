import React from 'react';

export function Create_book() {
  return (
    <main className='container-fluid text-center'>
            {/*/<!--I think I need to specify where this information will end up going in the action area. Will put placeholder for now.-->*/}
            {/*<!--Review the following code and make sure I'm not missing anything.-->}*/}
            <div>
                <h2 ClassName="text-align: center;">Create a Recipe Book!</h2>
                <form action="#" method="get">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Book Name:</span> 
                        <input className="form-control" type="text" id="my_recipebook" name="recipebook_name" placeholder="Text here" required/>
                        <button type="submit" className="button1">Submit</button>
                    </div>
                </form>
            </div>
        </main>
  );
}