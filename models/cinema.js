const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAListOfFilms = function () {
  // const listOfTitles = []
  // for (film of this.films) {
  //   console.log('film', film);
  //   listOfTitles.push(film.title)
  // }
  // return listOfTitles;
  const listOfTitles = this.films.map((film) => { 
    return film.title
  })
  return listOfTitles
}

Cinema.prototype.filmByTitle = function(filmTitle) {
  const foundFilm = this.films.find(film => film.title === filmTitle);
  return foundFilm;
}

Cinema.prototype.findByGenre = function(filmGenre) {
  const foundFilms = this.films.filter((film) => {
    return film.genre === filmGenre;
  })
  return foundFilms;
}

Cinema.prototype.findByProperty = function(filmProperty, filmSearchTerm) {
  const foundFilms = this.films.filter((film) => {
    for (property in film) {
      if (film.property === filmProperty) {
        for (film of this.films) {
          console.log('property', property);
          console.log('property value', film.property)
          console.log('propertyValue', propertyValue)
          return this.films.filmProperty === filmSearchTerm 
        }
      }
    }
  })
  return foundFilms;
}

Cinema.prototype.findByYear = function(filmYear) {
  const foundFilms = this.films.filter((film ) => {
    return film.year === filmYear;
  })
  return foundFilms.length > 0;
}

Cinema.prototype.findFilmsOverLength = function(filmLength) {
  const foundFilms = this.films.filter((film) => {
    return film.length < filmLength;
  })
  return !foundFilms.length > 0;
}

Cinema.prototype.totalRunTime = function() {
  const accumulatedTime = this.films.reduce((accumulator, film) => {
    return accumulator + film.length;
  }, 0)
  return accumulatedTime;
}


module.exports = Cinema;

