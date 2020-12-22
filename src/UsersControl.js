import React, { Component } from 'react';
import UsersForm from './UsersForm';

class UsersControl extends Component {
    state = {
        users: [
        ]
    }
    render() {
        return (
            <div>
                <UsersForm users={this.state.users} />
            </div>
        );
    }
}

export default UsersControl;