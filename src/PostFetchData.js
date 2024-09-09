import React, { useEffect, useState } from 'react'

export default function PostFetchData() {

    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) =>response.json())
        .then((json) =>setData(json))
    })


  return (
    <div>
      {
        data?(<div>
        <h1>Title: {data.title}</h1>
        <h2>Body: {data.body}</h2>

        </div>):(<p>Loading....</p>)
      }

    </div>
  );
}
