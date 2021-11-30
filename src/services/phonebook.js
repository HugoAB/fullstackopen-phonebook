import axios from 'axios';

const url = 'http://localhost:3002/persons';

const getAll = () => {
    const request = axios.get(url);
    return request.then(res => res.data);
}

const create = (personObject) => {
    const request = axios.post(url, personObject);
    return request.then(res => res.data);
}

const deleteContact = (id) => {
    const request = axios.delete(`${url}/${id}`);
    return request.then(res => res.data);
}

const update = (id, personObject) => {
    const request = axios.put(`${url}/${id}`, personObject);
    return request.then(res => res.data);
}

export default {
    getAll,
    create,
    deleteContact,
    update
}