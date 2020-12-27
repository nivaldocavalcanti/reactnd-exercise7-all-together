import React, { Component } from 'react';
import UsersForm from './UsersForm';
import UsersList from './UsersList';

class UsersControl extends Component {
    state = {
        error: '',
        users: [
            {
                username: 'Nivas',
                firstname: 'Nivaldo',
                lastname: 'Cavalcanti',
                games: 3
            },
            {
                username: 'Wal',
                firstname: 'Waleska',
                lastname: 'Cavalcanti',
                games: 2
            },
            {
                username: 'Mamá',
                firstname: 'Marcela',
                lastname: 'Castro',
                games: 1
            },
            {
                username: 'Kiqui',
                firstname: 'Aquiles',
                lastname: 'Castro',
                games: 1
            },
            {
                username: 'Juju',
                firstname: 'Julio',
                lastname: 'Castro',
                games: 1
            }
        ]
    }

    addUser = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newuser = {
            username: formData.get('username'),
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            games: 0
        }
        if(!this.userExists(newuser.username)){ 
            this.setState(oldState => ({
                error: '',
                users: [...oldState.users, newuser],
            }));
        } else {
            this.setState({ error: 'Error: This user already exists!' })
        }
    }

    userExists = (username) => {
        return this.state.users.filter((user)=>{ return user.username === username }).length > 0;
    }

    render() {
        return (
            <div>
                <UsersForm addUser={this.addUser} error={this.state.error} />
                <UsersList users={this.state.users} />
            </div>
        );
    }
}

export default UsersControl;