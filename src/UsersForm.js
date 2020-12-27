import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersForm extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
    };
    
    state = {
        username: '',
        firstname: '',
        lastname: ''
    }

    handleChange = event => {
        if(event.target.name === 'username') 
            this.setState({ username: event.target.value });
        if(event.target.name === 'firstname') 
            this.setState({ firstname: event.target.value });
        if(event.target.name === 'lastname') 
            this.setState({ lastname: event.target.value });
    };

    formIsEmpty = () => {
        const { username, firstname, lastname } = this.state;
        return username === '' || firstname === '' || lastname === '';
    }

    render() {
        const {addUser, error} = this.props;
        return (
            <div>
                <h1>Add Users to List</h1>
                <form onChange={this.handleChange} onSubmit={addUser}>
                    <input type="text" name="username" placeholder="Username" /><br/>
                    <input type="text" name="firstname" placeholder="User First Name" /><br/>
                    <input type="text" name="lastname" placeholder="User Last Name" /><br/>
                    <button disabled={this.formIsEmpty()}>Add User</button>
                </form>
                <h3 style={{color:'#ff0000'}}>{error}</h3>
            </div>
        );
    }
}

export default UsersForm;