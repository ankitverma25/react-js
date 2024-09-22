import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ankitverma25')
        .then(response => response.json())
        .then(data => setData(data))
      return
    }, [])
    


  return (
    <div>Github follower:{data.followers}</div>
  )
}

export default Github