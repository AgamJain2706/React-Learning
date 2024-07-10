import React, { useState ,useEffect } from 'react'


function Github() {
const[data,setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/AgamJain2706').then(response => response.json()).then(data => {
        console.log(data)
        setData(data)
    })
    }, [])
  return (
    <div className= "bg-gray-800 text-center text-white text-4xl ">Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="" className= "w-1/4 h-1/4 m-4  justify-center bg-red-950" />
    </div>
  )
}

export default Github