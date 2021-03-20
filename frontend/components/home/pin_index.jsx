import React from 'react';

export default ({ pins }) => {
    return (
        <div className="home-div-container">
            {
            pins.map(pin => {
                return (
                <div className="pin-index-div" key={pin.id}>
                    <img className="pin-index-photo pin_medium" src={pin.photoUrl}/>
                    <h2 className="pin-index-title">{pin.title}</h2>
                    <p className="pin-index-about">{pin.about}</p>
                </div>
                )
            })
            }
        </div>
    )
}

