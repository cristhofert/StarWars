import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Character from "../component/character";
import Planet from "../component/planet";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h2>Characters</h2>
			<div className="scrolling-wrapper row flex-row flex-nowrap  overflow-auto">
				{store.characters.map((item, index) => {
					return (
						<div key={index}>
							<Character name={item.name} uid={item.id} />
						</div>
					);
				})}
			</div>
			<br />
			<h2>Planets</h2>
			<div className="scrolling-wrapper row flex-row flex-nowrap overflow-auto ">
				{store.planets.map((item, index) => {
					return (
						<div key={index}>
							<Planet name={item.name} uid={item.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
