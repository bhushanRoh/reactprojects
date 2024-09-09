import React, { useState } from 'react'

export default function ToggleSwitch() {
    const [isToggled,setIsToggled]=useState(false);

    const handleToggle= ()=>{
        setIsToggled(!isToggled);
    }

  return (
    <div>
        <label>
            <input type='checkbox' onChange={handleToggle}></input>
            <p>{isToggled?'On': 'Off'}
            </p>
        </label>

    </div>
  );
}
