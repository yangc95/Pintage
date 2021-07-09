import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import PinIndexItem from './pin_index_item';

export default ({ pins, currentUser, session, history, boards, createPinBoard, fetchPin }) => {
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
  
  // debugger;
  let boardsArray = Object.values(boards);
  // let boardsArray = [];
  // Object.keys(boards).forEach(boardId => boardsArray.push(boards[boardId]));
  // const [ allBoards, setAllBoards ] = useState(boardsArray);

  const handlePinShow = (pinId) => {
    fetchPin(pinId).then(() => history.push(`/pin/${pinId}`))
  }

  const handleBoardSave = (pinboard) => {
    // debugger;
    createPinBoard(pinboard);
    // add some 'successfully added pop-up
  }

  // debugger;
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {
          pins.map(pin => {
            return (
              <PinIndexItem 
                key={pin.id}
                pin={pin}
                boardsArray={boardsArray}
                handleBoardSave={handleBoardSave}
                handlePinShow={handlePinShow}
                session={session}
                currentUser={currentUser}
              />
              // <div className="pin-index-div" key={pin.id}>
              //   <form className="pin-form-board-save">
              //     <label>
              //       <select className="pin-input-board" value={value} onChange={e => setValue(e.currentTarget.value)}>
              //         {allBoards.map(({ id, name }) => (
              //           <option
              //             key={id}
              //             value={id}>
              //             {name}
              //           </option>
              //         ))}
              //       </select>
              //     </label>
              //     <button className="pin-input-button" onClick={() => handleBoardSave(pin)}>Save</button>
              //   </form>  
              //   {/* <img className="pin-index-photo" src={pin.photoUrl} onClick={() => handlePinShow(pin.id)}/> */}
              //   <div className="pin-index-image" onClick={() => handlePinShow(pin.id)}></div>
              //   <h2 className="pin-index-title">{pin.title}</h2>
                
              //   <div className="profile-button-div">
              //     <button className="profile-button">
              //       {pin.user_id === session ? currentUser.username.split("")[0] : "O"}
              //     </button>
              //     <span>{pin.user_id === session ? currentUser.username : "OtherUser"}</span>
              //   </div>

              // </div>
            )
          })
        } 
    </Masonry>
  )
}