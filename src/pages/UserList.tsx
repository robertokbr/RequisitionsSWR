import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {

  const {data } = useFetch<User[]>('http://localhost:3333/users')
  const handleNameChange = useCallback((id : number)=>{
    api.put

  },[])


  if(!data){
    return (
      <h1>Loading...</h1>
    )
  }
  

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
          <button type="button" >
            Alterar nome
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;