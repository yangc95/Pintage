import React from 'react';

export default ({ pins }) => {
    // debugger;
    // console.log(pins)
    return (
        <ul>NO PINS WHY
            {
            pins.map(pin => {
                return (
                <li key={pin.id}>
                        <h2>{pin.title}</h2>
                        <p>{pin.about}</p>
                        <img src={pin.photoUrl}/>
                    </li>
                )
            })
            }
        </ul>
    )
}

