
var film1 = {

	title: "Gladiator",
	year: 2000,
	genere: "action",

};

var film2 = {

	title: "Her",
	year: 2013,
	genere: "drama",

};

var film3 = {

	title: "Star wars",
	year: 1977,
	genere: "science fiction",

};


var	filmList = JSON.parse(window.localStorage.getItem("filmsCollection")) || [] ;



/*function saveFilms(filmsArray){

		var b = JSON.stringify(filmsArray);
		window.localStorage.setItem ("filmsCollection", b);	


}

saveFilms (filmList);*/

var createFilm = function (film){

	filmList.push (film);
	var filmListString = JSON.stringify(filmList);
	window.localStorage.setItem ("filmsCollection", filmListString);

}
createFilm (film3);

function getFilmByTitle (title){

	var filmListString = window.localStorage.getItem("filmsCollection");
	var filmListArray = JSON.parse(filmListString);
	for (var i = 0; i<filmListArray.length; i++){
		if (filmListArray[i].title === title){
			return filmListArray[i];
		}
	}
	console.log("Title not found");

} 

getFilmByTitle("Her");

function removeFilm(title){

		var position = getFilmByTitle (title)	

		var filmListString = window.localStorage.getItem("filmsCollection");
		var filmListArray = JSON.parse(filmListString);		
		filmListArray.splice (position,1);

}

removeFilm ("Star wars");
