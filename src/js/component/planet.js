import React from "react";
import PropTypes from "prop-types";

const Planet = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population: {props.population}
					<br />
					Terrain: {props.terrain}
				</p>
				<div className="d-flex justify-content-between">
					<button className="btn btn-primary">Learn More!</button>
					<button className="btn btn-warning">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string
};

export default Planet;
