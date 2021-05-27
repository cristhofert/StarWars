import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const emailInput = useRef(null);
	const passswordInput = useRef(null);

	const login = e => {
		e.preventDefault();
		actions.login(emailInput.current.value, passswordInput.current.value);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="card bg-light mb-3">
						<div className="card-header">Login</div>
						<div className="card-body">
							<form onSubmit={login}>
								<div className="form-group">
									<label htmlFor="InputEmail">Email address</label>
									<input
										ref={emailInput}
										type="email"
										className="form-control"
										id="InputEmail"
										aria-describedby="emailHelp"
										placeholder="Enter email"></input>
									<small id="emailHelp" className="form-text text-muted">
										We ll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="InputPassword">Password</label>
									<input
										ref={passswordInput}
										type="password"
										className="form-control"
										id="InputPassword"
										placeholder="Password"></input>
								</div>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
