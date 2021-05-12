import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => actions.planetDetails(params.id), []);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="http://picsum.photos/id/913/600/400" />
				</div>
				<div className="col">
					<h1 className="display-4">
						{store.planet.name != undefined ? <p>{store.planet.name}</p> : "Cargando..."}
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare justo ante, in faucibus
						sapien bibendum ac. Nunc venenatis nibh id bibendum aliquam. Quisque vitae molestie sapien.
						Maecenas dignissim pharetra volutpat. Vivamus posuere ac nulla mattis interdum. Phasellus non
						leo lobortis, fermentum lorem vitae, gravida sapien. Vestibulum finibus magna eu maximus
						Maecenas dignissim pharetra volutpat. Vivamus posuere ac nulla mattis interdum. Phasellus non
						leo lobortis, fermentum lorem vitae, gravida sapien. Vestibulum finibus magna eu maximus
					</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="row d-flex justify-content-between text-center text-danger">
				<div>
					<h6>Name</h6>
					<p>{store.planet.name != undefined ? <p>{store.planet.name}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Climate</h6>
					<p>{store.planet.climate != undefined ? <p>{store.planet.climate}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Population</h6>
					<p>{store.planet.population != undefined ? <p>{store.planet.population}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Orbital Period</h6>
					<p>
						{store.planet.orbital_period != undefined ? (
							<p>{store.planet.orbital_period}</p>
						) : (
							"Cargando..."
						)}
					</p>
				</div>
				<div>
					<h6>Rotation Period</h6>
					<p>
						{store.planet.rotation_period != undefined ? (
							<p>{store.planet.rotation_period}</p>
						) : (
							"Cargando..."
						)}
					</p>
				</div>
				<div>
					<h6>Diameter</h6>
					<p>{store.planet.diameter != undefined ? <p>{store.planet.diameter}</p> : "Cargando..."}</p>
				</div>
			</div>
		</div>
	);
};
