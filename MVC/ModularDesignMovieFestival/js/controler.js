"use strict";

(function (data, ui) {
  var createMovieBtn = document.querySelector("#create-movie-btn");
  var createProgramBtn = document.querySelector("#create-program-btn");
  var addMovieToProgramBtn = document.querySelector(
    "#add-movie-to-program-btn"
  );

  var addNewMovie = function (e) {
    e.preventDefault();
    try {
      var isValid = ui.movieIsValid();
      if (!isValid) throw new Error("Invalid Input, all fields are required");
      var movie = data.generateMovie(ui.collectData());
      var movieExist = data.chekIfMovieExists(data.festival, movie);
      if (movieExist) throw new Error("Movie Allready Exists");
      ui.renderMovieList(movie);
      var index = data.festival.addMovieToList(movie) - 1;
      ui.renderMovieOptions(movie.getTitle(), index);
      ui.clearMovieInput();
    } catch (err) {
      ui.renderMovieError(err.message);
    }
  };

  var addNewProgram = function (e) {
    e.preventDefault();
    try {
      var program = data.generateProgram(ui.collectDate());
      var programExists = data.chekIfProgramExists(
        data.festival.listOfPrograms,
        ui.collectDate()
      );
      if (programExists) throw new Error("Program Already Exists");
      if (ui.prgoramIsNotValid(ui.collectDate()))
        throw new Error("Invalid Program Input");
      var index = data.festival.addProgramToList(program) - 1;
      ui.renderProgramList(program, index);
      ui.renderProgramOptions(program, index);
      ui.clearProgramInput();
    } catch (err) {
      ui.renderProgramError(err.message);
    }
  };

  var addMovieToProgramHandler = function (e) {
    e.preventDefault();

    try {
      ui.clearProgramError();
      var { movieList: movieIndex, programList: programIndex } =
        ui.collectProgramAndMovieData();
      var festival = data.festival;
      var movie = data.findMovie(festival.listOfMovies, movieIndex);
      var program = data.findProgram(festival.listOfPrograms, programIndex);

      program.addMovieToList(movie);
      data.festival.minutes = program.getMovieMinutes();

      if (data.festival.minutes > 400)
        throw new Error(
          "Program Cant Have More Than 400 minutes for current day"
        );
      ui.updateProgram(programIndex, program);
    } catch (err) {
      ui.renderProgramError(err.message);
    }
  };

  createMovieBtn.addEventListener("click", addNewMovie);
  createProgramBtn.addEventListener("click", addNewProgram);
  addMovieToProgramBtn.addEventListener("click", addMovieToProgramHandler);
})(dataModule, uiModule);