import { connect } from 'react-redux';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards } }) => {
    return {
        board: boards
    }
}

const mDTP = dispatch => {
    return {
        
    }
}

export default connect(mSTP, mDTP)(BoardShow);