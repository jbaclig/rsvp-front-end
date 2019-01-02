import React, { Component } from 'react';
import 'isomorphic-fetch';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            invalidLogin: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    handleChange(e) {
        let state = this.state;

        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    checkLogin(e) {
        e.preventDefault();

        let { username, password } = this.state;
        let url = `${this.props.endpoint}/login/${username}/${password}`;

        fetch(url)
            .then(response => response.json())
            .then(data => data.length > 0 ?
                this.props.setLoggedIn(true) :
                this.setState({ invalidLogin: true })
            );
    }

    render() {
        return (
            <div className="col-sm-8 col-md-6 col-lg-4 p-4">
                <h1 className="text-center">Admin Login</h1>
                { this.state.invalidLogin ? 
                    <p>The login you entered is incorrect</p> :
                    null }
                <form>
                    <div className="form-group">
                        <input 
                        name="username"
                        type="text" 
                        className="form-control" 
                        id="usernameInput" 
                        placeholder="Username"
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        id="passwordInput" 
                        placeholder="Password"
                        onChange={this.handleChange} />
                    </div>
                    <button 
                    className="btn btn-primary"
                    onClick={this.checkLogin} >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;