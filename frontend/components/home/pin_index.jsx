import React from 'react';
import Masonry from 'react-masonry-css';

export default ({ pins, currentUser }) => {
  const breakpoints = {
    default: 10,
    2645: 9,
    2385: 8,
    2125: 7,
    1830: 6,
    1570: 5,
    1345: 4,
    1085: 3,
    825: 2,
    565: 1 
  }
  // {/* <img className="pin-index-photo pin_medium" src={pins[0].photoUrl}/> */}
  // <h2 className="pin-index-title">{pins[0][title]}</h2>
  // <p className="pin-index-about">{pins[0][about]}</p>
  return (
    <Masonry 
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {
          pins.map(pin => {
            return (
              <div className="pin-index-div" key={pin.id}>
                {/* <img className="pin-index-photo" src={pin.photoUrl}/> */}
                <div className="pin-index-image"></div>
                <h2 className="pin-index-title">{pin.title}</h2>
                <div className="profile-button-div">
                  <button className="profile-button">
                    {pin.user_id === currentUser.id ? currentUser.username.split("")[0] : "O"}
                  </button>
                  <span>{pin.user_id === currentUser.id ? currentUser.username : "OtherUser"}</span>
                </div>
                {/* <p className="pin-index-about">{pin.about}</p> */}
              </div>
            )
          })
        } 
    </Masonry>
  )
}

