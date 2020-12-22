import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersList extends Component {
    render() {
        return (
            <ul>
                {users.map((user)=>(
                    <User user={user} />
                ))}
            </ul>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersList;