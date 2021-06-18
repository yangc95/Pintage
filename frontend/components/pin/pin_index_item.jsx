import React from 'react';
import { useState } from 'react';

export default ({ pin, boardsArray, handleBoardSave, handlePinShow, session, currentUser}) => { 
  const [ value, setValue ] = useState('1');
  debugger;
  return (    
    <div className="pin-index-div" key={pin.id}>
        <form className="pin-form-board-save">
            <label>
            <select className="pin-input-board" value={value} onChange={e => setValue(e.currentTarget.value)}>
                {boardsArray.map(({ id, name }) => (
                <option
                    key={id}
                    value={id}>
                    {name}
                </option>
                ))}
            </select>
            </label>
            <button className="pin-input-button" onClick={() => handleBoardSave(pin)}>Save</button>
        </form>  
        {/* <img className="pin-index-photo" src={pin.photoUrl} onClick={() => handlePinShow(pin.id)}/> */}
        <div className="pin-index-image" onClick={() => handlePinShow(pin.id)}></div>
        <h2 className="pin-index-title">{pin.title}</h2>
        
        <div className="profile-button-div">
            <button className="profile-button">
            {pin.user_id === session ? currentUser.username.split("")[0] : "O"}
            </button>
            <span>{pin.user_id === session ? currentUser.username : "OtherUser"}</span>
        </div>
    </div>
  )
}