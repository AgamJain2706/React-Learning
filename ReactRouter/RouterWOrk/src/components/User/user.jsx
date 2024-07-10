import React from 'react'
import {useParams} from 'react-router-dom'


const user = () => {
    const {userid} = useParams()
  return (
    <div className= "text-center bg-blue-950 text-white">user : {userid} </div>
  )
}

export default user