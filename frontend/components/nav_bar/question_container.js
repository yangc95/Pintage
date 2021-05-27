import { connect } from 'react-redux';


const mSTP = ({ session, entities: { users }, ui: { navbar} }) => {
  return {
    currentUser: users[session.id],
    users,
    navbar
  };
};

const mDTP = dispatch => {
	return {
    openModal: modal => dispatch(openModal(modal)),
    activeNavbar: () => dispatch(activeNavbar()),
    inactiveNavbar: () => dispatch(inactiveNavbar())
	};
};

export default withRouter(connect(mSTP, mDTP)(Navbar));