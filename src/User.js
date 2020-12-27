import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li>
            {props.user.username} played {props.hide ? '*' : props.user.games} games.
        </li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    hide: PropTypes.bool.isRequired
};

export default User;