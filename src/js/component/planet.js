import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="https://picsum.photos/id/1010/400/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Lorem Ipsum</p>
				<div className="d-flex justify-content-between">
					<Link className="btn btn-primary" to={"/planet/" + props.uid}>
						Learn More!
					</Link>
					<button className="btn btn-warning" onClick={() => actions.addFav(props.name, props.uid, "planet")}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};

export default Planet;
