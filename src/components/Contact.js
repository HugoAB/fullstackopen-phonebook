import React from 'react';


const Contact = ({ name, number, id, handleDelete }) => {

    return (
        <>
            <li>{name} - {number}
                <button onClick={() => handleDelete(id, name)}>Delete</button>
            </li>
        </>
    )
}

export default Contact;