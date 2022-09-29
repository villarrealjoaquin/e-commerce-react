import React from 'react'
import { useId } from 'react'

export const UserList = ({user, userDelete}) => {

  return (
   <>
    {user.map((user, i ) => {
            return (
                <div key= {i}>
                    <h2>{user}</h2>
                    <button onClick={()=>userDelete(user)}>eliminar usuario</button>
                </div>
            )
        })}
   </>
  )
}
