import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="card bg-light mb-3">
						<div className="card-header">Login</div>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="InputEmail">Email address</label>
									<input
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
