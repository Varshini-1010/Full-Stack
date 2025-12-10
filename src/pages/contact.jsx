
import React, { useContext } from 'react'
import { userContext } from '../App'

const Contact = () => {
  const name = useContext(userContext)
  return (
    <div>
      <h1>{name} from useContext</h1>
    </div>
  )
}

export default Contact
