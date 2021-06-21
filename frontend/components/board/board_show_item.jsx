import React from 'react';

export default ({ pin, handlePinShow }) => {

    return (
        <div className="board-show-pin-index" key={pin.id}>
            <div className="pin-index-image" onClick={() => handlePinShow(pin.id)}></div>
            {/* <img className="pin-index-photo" src={pin.photoUrl} onClick={() => handlePinShow(pin.id)}/> */}
            <h2 className="pin-index-title">{pin.title}</h2>
            <p className="pin-index-about">{pin.about}</p>
        </div>
    )

}