import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const { data} = useFetch<User>(`http://localhost:3333/users/${id}`);

if(!data){
  return (
    <h1>Loading...</h1>
  )
}
  return (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Name: {data?.name}</li>
    </ul>
  );
}

export default UserDetails;