import React, { useEffect, useState } from 'react';
import Contacts from './components/Contacts';
import NewContactForm from './components/NewContactForm';
import Search from './components/Search';
import Notification from './components/Notification';

import phonebookService from './services/phonebook';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [notificationClass, setNotificationClass] = useState('success');

  const names = persons.map(person => person.name);

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
  }

    if(names.includes(newName)) {
      
      const answer = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`);
      if(answer) {
        const person = persons.find(p => p.name === newName);
        const id = person.id;
        const personUpdateObj = {
          name: newName,
          number: newNumber
        }
        phonebookService.update(id, personUpdateObj).then(returnedContact => {
          setPersons(persons.map(person => person.id ? person : returnedContact));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          setNotificationClass('error');
          setMessage(`Information of ${personObject.name} has already been removed from server`);
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        })
      }
    } else {
      phonebookService.create(personObject)
        .then(returnedContact => {
          setMessage(`Added ${returnedContact.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 2000);
          setPersons(persons.concat(returnedContact));
          setNewName('');
          setNewNumber('');
        })
      
    }

  }

  const handleName = (e) => {
    setNewName(e.target.value);
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  
  useEffect(() => {
    phonebookService.getAll()
      .then(initialContacts => setPersons(initialContacts));
  }, []);


  return (
    <>
      <h2>Phonebook</h2>
      {
        message !== null && <Notification message={message} notificationClass={notificationClass} />
      }
      <Search action={handleFilter} value={filter} />
      <NewContactForm 
          addPerson={addPerson}
          handleName={handleName}
          handleNumber={handleNumber}
          newName={newName}
          newNumber={newNumber}
      />
      <Contacts 
        personsToShow={personsToShow} />
    </>
  );
}

export default App;
