import React from 'react';
import phonebookService from '../services/phonebook';
import Contact from './Contact';

const Contacts = ({ personsToShow }) => {

    const handleDelete = (id, name) => {
          const answer = window.confirm(`Delete ${name}`);
    
          if(answer) {
              phonebookService.deleteContact(id)
              .then(res => {
                  alert('Contact deleted');
                  
              });
          }
      }

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                    {
                    personsToShow.map(person => (
                        <div key={person.name}>
                            <Contact 
                                name={person.name} 
                                number={person.number} 
                                id={person.id}
                                handleDelete={handleDelete}
                            />
                        </div>
                        
                        
                    ))
                    }
            </ul>
        </div>
    );
}

export default Contacts;
