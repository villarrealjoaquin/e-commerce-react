import React, {useState}from 'react'
import { UserList } from './UserList';

export const Users = () => {

    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const handlerChange = (e) => {
        setUser(e.target.value)
    }

    const handlerClick = () => {
        setUsers([...users, user])
    }

    const handlerUserDelete = (userD) => {
        const filtrado = users.filter((user) => {
            return user !== userD
        })
        setUsers(filtrado)
        // setUsers(user.filter ((user)=> {
        //     return user !== userD
        // })) 
    }

  return (
    <div>
        <input type="text" onChange={handlerChange}/>
        <button onClick={handlerClick}>Agregar a la lista</button>
       <UserList user = {users}  userDelete = {handlerUserDelete} />
    </div>
  )
}
