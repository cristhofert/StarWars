import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => actions.characterDetails(params.id), []);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="http://picsum.photos/600/400" />
				</div>
				<div className="col">
					<h1 className="display-4">
						{store.character.name != undefined ? <p>{store.character.name}</p> : "Cargando..."}
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
					<p>{store.character.name != undefined ? <p>{store.character.name}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Birth Year</h6>
					<p>
						{store.character.birth_year != undefined ? <p>{store.character.birth_year}</p> : "Cargando..."}
					</p>
				</div>
				<div>
					<h6>Gender</h6>
					<p>{store.character.gender != undefined ? <p>{store.character.gender}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Height</h6>
					<p>{store.character.height != undefined ? <p>{store.character.height}</p> : "Cargando..."}</p>
				</div>
				<div>
					<h6>Skin Color</h6>
					<p>
						{store.character.skin_color != undefined ? <p>{store.character.skin_color}</p> : "Cargando..."}
					</p>
				</div>
				<div>
					<h6>Eye Color</h6>
					<p>{store.character.eye_color != undefined ? <p>{store.character.eye_color}</p> : "Cargando..."}</p>
				</div>
			</div>
		</div>
	);
};
