import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="card bg-light mb-3">
						<div className="card-header">Signup</div>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="input_username">User Name</label>
									<input
										type="text"
										className="form-control"
										id="input_username"
										aria-describedby="emailHelp"
										placeholder="Enter username"></input>
								</div>
								<div className="form-group">
									<label htmlFor="first_name_input">First Name</label>
									<input
										type="text"
										className="form-control"
										id="first_name_input"
										aria-describedby="emailHelp"
										placeholder="Enter first name"></input>
								</div>
								<div className="form-group">
									<label htmlFor="last_name_input">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="last_name_input"
										aria-describedby="emailHelp"
										placeholder="Enter last name"></input>
								</div>
								<div className="form-group">
									<label htmlFor="email_input">Email address</label>
									<input
										type="email"
										className="form-control"
										id="email_input"
										aria-describedby="emailHelp"
										placeholder="Enter email"></input>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
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
