import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    // navLink: <Link to="/signup">Need an account? Sign up now</Link>
  };
};

const mDTP = dispatch => {
  return {
    action: user => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);