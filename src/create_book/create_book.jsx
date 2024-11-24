import React from 'react';

export function Create_book(props) {
    const [bookName, setBookName] = React.useState('');

    async function storeBookName() {
        console.log(bookName)
        await fetch('/api/bookName', {
            method: 'POST',
            headers: { 'content-type': 'application/json',
             },
            body: JSON.stringify({bookName})
        });
        console.log("kachow");
    }


  return (
    <main className='container-fluid text-center'>
            {/*/<!--I think I need to specify where this information will end up going in the action area. Will put placeholder for now.-->*/}
            {/*<!--Review the following code and make sure I'm not missing anything.-->}*/}
            <div className='root'>
                <h2 className="text-align: center;">Create a Recipe Book!</h2>
                <div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Book Name:</span> 
                        <input className="form-control" type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Text here" required/>
                        {/* Need to see how handleSubmit would work */}
                        <button type="submit" className="button1" onClick={() => storeBookName()}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
  );
}