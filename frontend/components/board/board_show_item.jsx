import React from 'react';

export default ({ pinArray }) => {
    pinArray.map(pin => {
        return (
        <div className="board-show-pin-index" key={pin.id}>
            <div className="pin-index-image"></div>
            <h2 className="pin-index-title">{pin.title}</h2>
            <p className="pin-index-about">{pin.about}</p>
        </div>
        )
    })
}