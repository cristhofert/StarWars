const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			character: {},
			planet: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: (name, uid, type) => {
				const store = getStore();
				if (store.favorites.every(i => i.name != name)) {
					setStore({ favorites: [...store.favorites, { name, uid, type }] });
				}
			},
			removeFav: i => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.name != i) });
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
			} /*,
            signup: () => {
                fetch(process.env.URL_API + "user/", 
                {method: "POST",})
                    .then(res => res.json())
                    .then(data => setStore({ planet: data.result.properties }))
                    .catch(err => console.error(err));
            }*/
		}
	};
};

export default getState;
