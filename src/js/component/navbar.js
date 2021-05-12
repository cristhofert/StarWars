import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starsWar from "../../img/star-wars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container d-flex justify-content-between ">
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
								{store.favorites.map((item, index) => {
									return (
										<div key={index} className="dropdown-item d-flex justify-content-between">
											<Link to={item.type + "/" + item.uid} className="pr-1">
												{item.name}
											</Link>
											<button
												className="btn btn-danger"
												onClick={() => {
													actions.removeFav(item.name);
												}}>
												<i className="far fa-trash-alt"></i>
											</button>
										</div>
									);
								})}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
