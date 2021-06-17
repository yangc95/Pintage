import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.handleBack = this.handleBack.bind(this);
    this.handleDeletePin = this.handleDeletePin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleBack() {
    // this.props.fetchBoards()
    //   .then(() => this.props.history.push('/_saved'))
    this.props.history.push('/_saved')
  }

  handleDeletePin() {
    const { destroyPin } = this.props;
    destroyPin(this.state)
      .then(() => {
        this.handleBack()
      })
  }

  render() {
    const { pin, session, user } = this.props;

    return (
      <div className="pin-show">
        <button className="hi-arrow-left" onClick={() => this.handleBack()}>
          <HiArrowLeft />
        </button>

        <div className="pin-show-item">
          {/* <div className="pin-index-image"></div> */}
          <img className="pin-index-photo" src={pin.photoUrl}/>
          <div className="pin-show-item-info">
            <h2 className="pin-index-title">{pin.title}</h2>
            <h3>{pin.about}</h3>

            <div className="profile-button-div">
              <button className="profile-button">
                {pin.user_id === session ? user.username.split("")[0] : "O"}
              </button>
              <span>{pin.user_id === session ? user.username : "OtherUser"}</span>
            </div>

            {
              pin.user_id === session ?
                <span className="edit-delete" key={pin.id}>
                  <button onClick={() => this.handleDeletePin()} className="pin-show-delete">Delete Pin</button>
                  <p className="edit-delete-info">Are you sure?</p>
                  <p className="edit-delete-info">Once you delete a Pin, you can't undo it!</p> 
                </span> : ""
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PinShow;