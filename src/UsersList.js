import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UsersList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    state = {
        action: 'Hide',
        hide: false
    }

    toggleGames = () => {
        this.state.hide ? this.setState(() => ({ action: 'Hide', hide: false })) : this.setState(() => ({ action: 'Show', hide: true}));
    }

    render() {
        const {users} = this.props;
        const {action,hide} = this.state;
        return (
            <div>
                <h1>Users List</h1>
                <ol>
                    {users.map((user,index)=> <User key={index} user={user} hide={hide} />)}
                </ol>
                <br />
                <button onClick={this.toggleGames}>{action} the Number of Games Played</button>
            </div>
        );
    }    
}    

export default UsersList;