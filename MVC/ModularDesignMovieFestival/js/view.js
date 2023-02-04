var uiModule = (function () {
  var movieTitleEl = document.querySelector("#movie-title");
  var movieLengthEl = document.querySelector("#movie-length");
  var movieGenreEl = document.querySelector("#genre-select");
  var dateInputEl = document.querySelector("#program-date");

  var moviesContainerEl = document.querySelector("#movies-container");
  var moviesListContainer = document.getElementById("movie-list");

  var programContainerEl = document.querySelector("#program-container");
  var programListContainer = document.getElementById("program-list");

  var addMovieErrorEl = document.getElementById("add-movie-error");

  var dateInputEl = document.querySelector("#program-date");

  var addMovieToProgramErrEl = document.getElementById(
    "add-movie-to-pprogram-error"
  );

  //Colecting input data

  var collectData = function () {
    return {
      title: movieTitleEl.value,
      length: +movieLengthEl.value,
      genre: movieGenreEl.value,
    };
  };

  var collectDate = function () {
    return dateInputEl.value;
  };

  var collectProgramAndMovieData = function () {
    return {
      movieList: +moviesListContainer.value,
      programList: +programListContainer.value,
    };
  };

  //reseting inputs
  var clearMovieInput = function () {
    addMovieErrorEl.textContent = "";
    movieTitleEl.value = "";
    movieLengthEl.value = "";
    movieGenreEl.value = "";
  };

  var clearProgramInput = function () {
    dateInputEl.value = "";
  };

  //rendering movie and program list
  var renderList = function (nodeEl, obj, index = null) {
    var tempLi = document.createElement("li");
    tempLi.textContent = obj.getData();
    if (index) {
      tempLi.setAttribute("id", index);
    }
    nodeEl.append(tempLi);
  };

  var renderMovieList = function (movie) {
    renderList(moviesContainerEl, movie);
  };

  var renderProgramList = function (propgram, index) {
    renderList(programContainerEl, propgram, index);
  };

  // rendering movie and program options
  var renderOptions = function (data, index, nodeEl) {
    var optionEl = document.createElement("option");
    optionEl.setAttribute("value", index);
    if (typeof data === "string") {
      optionEl.textContent = data;
    } else {
      optionEl.textContent = data.getProgramOptions();
    }
    nodeEl.append(optionEl);
  };

  var renderMovieOptions = function (movieTitle, index) {
    renderOptions(movieTitle, index, moviesListContainer);
  };

  var renderProgramOptions = function (program, index) {
    renderOptions(program, index, programListContainer);
  };

  //Validation
  var movieIsValid = function () {
    if (!movieTitleEl.value || !movieLengthEl.value || !movieGenreEl.value) {
      return false;
    } else {
      return true;
    }
  };

  var programIsNotValid = function (date) {
    console.log(date);
    if (new Date(date).getTime() < Date.now() || dateInputEl.value === "") {
      return true;
    } else {
      return false;
    }
  };

  var renderMovieError = function (errMsg) {
    addMovieErrorEl.textContent = errMsg;
  };
  var renderProgramError = function (errMsg) {
    addMovieToProgramErrEl.textContent = errMsg;
  };

  var clearProgramError = function () {
    addMovieToProgramErrEl.textContent = "";
  };

  var updateProgram = function (index, program) {
    programContainerEl.children[index].textContent = program.getData();
  };

  return {
    collectData: collectData,
    collectDate: collectDate,
    renderMovieList: renderMovieList,
    renderMovieOptions: renderMovieOptions,
    renderProgramOptions: renderProgramOptions,
    renderProgramList: renderProgramList,
    movieIsValid: movieIsValid,
    renderMovieError: renderMovieError,
    clearMovieInput: clearMovieInput,
    clearProgramInput: clearProgramInput,
    programIsNotValid: programIsNotValid,
    renderProgramError: renderProgramError,
    collectProgramAndMovieData: collectProgramAndMovieData,
    clearProgramError: clearProgramError,
    updateProgram: updateProgram,
  };
})();