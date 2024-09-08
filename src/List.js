import React from 'react'

export default function List() {
    const items=['Item1','Item2','Item3','Item4','Item5'];


  return (
   <ul>
    {items.map((item,index)=>
        <li key={index}>{item}</li>
    )}
   </ul>
  );
}
