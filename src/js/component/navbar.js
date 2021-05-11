import React from "react";
import { Link } from "react-router-dom";
import starsWar from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={starsWar} alt="star-wars" className="navbar-brand mb-0 h1" style={{ height: "2em" }} />
				</Link>
				<div className="collapse navbar-collapse"></div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle btn btn-outline-primary"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
