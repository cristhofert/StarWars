const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			character: {},
			planet: {},
			user: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch(process.env.URL_API + "planet/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data });
						console.log(data);
					})
					.catch(err => console.error(err, "LOAD DATA"));
				fetch(process.env.URL_API + "character/")
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data });
						console.log(data);
					})
					.catch(err => console.error(err, "LOAD"));
				getActions().getFavorites();
			},
			addFav: (name, uid, type) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.URL_API}favorite/${type}/${uid}`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				getActions().getFavorites();
			},
			removeFav: (id, type) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.URL_API}/favorite/${type}/${id}`, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				getActions().getFavorites();
			},
			characterDetails: uid => {
				fetch(process.env.URL_API + "character/" + uid)
					.then(res => res.json())
					.then(data => setStore({ character: data }))
					.catch(err => console.error(err));
			},
			planetDetails: uid => {
				fetch(process.env.URL_API + "planet/" + uid)
					.then(res => res.json())
					.then(data => setStore({ planet: data }))
					.catch(err => console.error(err));
			},
			login: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.URL_API + "login", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result);
						setStore({ user: result.user });
						sessionStorage.setItem("token", result.token);
					})
					.catch(error => console.log("error", error));
			},
			signup: (email, password, user_name, first_name, last_name) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email,
					password,
					user_name,
					first_name,
					last_name
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.URL_API + "user", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			getFavorites: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.URL_API + "user/favorites", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result);
						setStore({
							favorites: result.map(i => {
								return i.planet === null
									? { ...i.character, type: "character" }
									: { ...i.planet, type: "planet" };
							})
						});
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
