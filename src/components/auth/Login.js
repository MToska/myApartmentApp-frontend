import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/users/login', newUser)
            .then(res => this.props.history.push("/dashboard"))
            .catch(err =>
                this.setState({
                    errors: err.response.data
                })
            );
    };

    render() {
        const { email, password, errors } = this.state;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="mt-5 text-center mb-0">
                                Login
                        </h2>
                            <p className="text-lead text-centre">
                                Signing your account here
                        </p>
                            <form onSubmit={this.handleSubmit}>
                                
                                <div className="form-group">
                                    <input type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        className={
                                            errors.type === "email"
                                                ? "is-invalid form-control"
                                                : "from control"
                                        } placeholder="Enter your email"
                                    />
                                    <span className="invalid-feedback">{errors.msg} </span>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                        className={
                                            errors.type === "password"
                                                ? "is-invalid form-control"
                                                : "from control"
                                        } placeholder="Enter your password"
                                    />
                                    <span className="invalid-feedback">{errors.msg} </span>
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary justify-content-center d-flex w-100"
                                    value="Login"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Login;