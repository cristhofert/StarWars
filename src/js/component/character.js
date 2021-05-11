import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Character = props => {
	return (
		<div className="card m-1" style={{ width: "18rem" }}>
			<img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">lorem ipsum</p>
				<div className="d-flex justify-content-between">
					<Link className="btn btn-primary" to={"/single/" + props.uid}>
						Learn More!
					</Link>
					<button className="btn btn-warning">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};

export default Character;
