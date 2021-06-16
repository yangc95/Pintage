import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import { fetchPin } from '../../actions/pin_actions';
import { editPin } from '../../actions/pin_actions';

export default ({ pins, currentUser, session, history, boards }) => {
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
  
  let boardsArray = [];
  Object.keys(boards).forEach(boardId => boardsArray.push(boards[boardId]));
  const [ allBoards ] = React.useState(boardsArray);
  const [ value, setValue ] = React.useState('1');

  const handlePinShow = (pinId) => {
    dispatch(fetchPin(pinId)).then(() => history.push(`/pin/${pinId}`))
  }

  const handleBoardSave = (pin) => {
    // debugger;
    // Need to add a joins table in backend
    // dispatch(editPin(pin)).then(() => history.push('/_saved'))
  }

 
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {
          pins.map(pin => {
            return (
              <div className="pin-index-div" key={pin.id}>
                <img className="pin-index-photo" src={pin.photoUrl} onClick={() => handlePinShow(pin.id)}/>
                {/* <div className="pin-index-image" onClick={() => handlePinShow(pin.id)}></div> */}
                <h2 className="pin-index-title">{pin.title}</h2>
                
                <div className="profile-button-div">
                  <button className="profile-button">
                    {pin.user_id === session ? currentUser.username.split("")[0] : "O"}
                  </button>
                  <span>{pin.user_id === session ? currentUser.username : "OtherUser"}</span>
                </div>

                <form className="pin-form-board-save">
                  <label>
                    <select className="pin-input-board" value={value} onChange={e => setValue(e.currentTarget.value)}>
                      {allBoards.map(({ id, name }) => (
                        <option
                          key={id}
                          value={id}
                        >
                          {name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button className="pin-input-button" onClick={() => handleBoardSave(pin)}>Save</button>

                </form>  
              </div>
            )
          })
        } 
    </Masonry>
  )
}