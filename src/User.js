import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li>
            {username}
        </li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;