import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LoginForm extends Component {
  render () {
    const { user, handleChange, submit  } = this.props;
    return (
        <div className="row">
		    <div className="col-md-offset-2 col-md-8">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center">
							Login
						</h2>
					</div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group text-left">
                                <label htmlFor="name">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={user.email}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter the password"
                                    rows="5"
                                    value={user.password}
                                    onChange={handleChange}
                                    />
                            </div>
                            <button type="button" className="btn btn-submit btn-block" onClick={submit}>Login</button>
                            <h2>Don't have an account yet ? <Link to="/signup">Signup</Link></h2>
                        </form>
                    </div>
			    </div>
		    </div>
	    </div>
    );
  }
}