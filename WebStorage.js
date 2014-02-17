
// var film1 = {

// 	title: "Gladiator",
// 	year: 2000,
// 	genere: "action",

// };

// var film2 = {

// 	title: "Her",
// 	year: 2013,
// 	genere: "drama",

// };

// var film3 = {

// 	title: "Star wars",
// 	year: 1977,
// 	genere: "science fiction",

// };











var btnDelete = document.getElementById ('delete');

btnDelete.addEventListener('click', function(){
	var contenido = document.getElementById('caja').value;
	filmManager.removeFilm(contenido);
});

var btnSearch = document.getElementById ('search');

btnSearch.addEventListener('click', function(){
	var contenido = document.getElementById('caja').value;
	filmManager.getFilmByTitle(contenido);
});


var btnAdd = document.getElementById ('add');

btnAdd.addEventListener('click', function(){
	var contenido = document.getElementById('caja').value;
	filmManager.createFilm(contenido);
});



var filmManager = {


	
	createFilm: function(film){

		var	filmList = JSON.parse(window.localStorage.getItem("filmsCollection")) || [] ;
		filmList.push (film);
		var filmListString = JSON.stringify(filmList);
		window.localStorage.setItem ("filmsCollection", filmListString);

		if (window.webkitNotifications){
			
			console.log("Notifications are supported");
		}

		if (window.webkitNotifications.checkPermission()===1){
			window.webkitNotifications.requestPermission();
			console.log("Notification are supported");
		}

		window.webkitNotifications.createNotification ('http://ec2-50-19-226-0.compute-1.amazonaws.com/wp/wp-content/uploads/2011/09/Apps-preferences-desktop-notification-icon.png', "Aviso", "Se añadió un elemento");
	},

	getFilmByTitle: function(title){

		var filmListString = window.localStorage.getItem("filmsCollection");
		var filmListArray = JSON.parse(filmListString);
		for (var i = 0; i<filmListArray.length; i++){
		if (filmListArray[i].title === title){

			console.log(filmListArray[i]);
			return filmListArray[i];

		}
	}
	console.log("Title not found");
	},

	removeFilm: function(title){
		var position = filmManager.getFilmByTitle (title);
		var filmListString = window.localStorage.getItem("filmsCollection");
		var filmListArray = JSON.parse(filmListString);		
		filmListArray.splice (position,1);
		var filmListString = JSON.stringify(filmListArray);
		window.localStorage.setItem ("filmsCollection", filmListString);
		console.log("Borrada " + title);
	}
};


