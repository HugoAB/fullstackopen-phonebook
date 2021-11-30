import React from 'react';

const NewContactForm = ( props ) => {
    return (
        <form onSubmit={props.addPerson}>
            <h2>add a new</h2>
            <div>
            name: <input onChange={props.handleName} value={props.newName} />
            </div>
            <div>
            number: <input onChange={props.handleNumber} value={props.newNumber} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    );
}

export default NewContactForm;
