class Festival {
  constructor() {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
  }
}

class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
  }

  getGenreCode() {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return firstLetter + lastLetter;
  }

  getData() {
    return this.title + ', ' + this.length + 'minutes, ' + this.getGenreCode();
  }
}

class Program {
  constructor(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
  }

  lengthOfAllMovies() {
    var sumOfMinutes = 0;
    this.listOfMovies.forEach(function (movie) {
      sumOfMinutes += movie.length;
    });
    return sumOfMinutes;
  }

  addMovie(movie) {
    if (!movie || !(movie instanceof Movie)) {
      console.log('Invalid input');
      return;
    }
    this.listOfMovies.push(movie);
  }

  getTotalMovies() {
    return this.listOfMovies.length;
  }

  getData() {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + '.' + month + '.' + year;
    var resultStr = date;

    resultStr += ', ' + this.getTotalMovies() + ' movies, duration: ' + this.lengthOfAllMovies() + 'minutes';
    return resultStr;
  }
}
