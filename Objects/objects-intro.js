// 1. Create an object that represents your favourite coffee. Please include coffee name ,strength, flavour, milk, sugar, … everything you like!

var coffee = {
  name: "cappuccino",
  strenght: "mild",
  flavour: "chocolate",
  milk: true,
  sugar: false
};
console.log(coffee);

// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.
var favouriteMovie = {
  title: "Maratonci trče počasni krug",
  actors: {
    actor1: "Bogdan Diklić",
    actor2: "Pavle Vuisić",
    actor3: "Danilo Stojković",
    actor4: "Mija Aleksić",
    actor5: "Jelisaveta Sablić",
    actor6: "Bora Todorović",
    actor7: "Zoran Radmilović"
  },
  director: "Slobodan Šijan",
  genre: {
    genre1: "tragikomedija",
    genre2: "crnihumor",
    genre3: "Sci-Fi"
  },
  popularity: "Popular"
};

// 3. Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not.Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not;

/* 
function getProgram(desc, lang, git, devStatus) {
  var program = {
    description: desc,
    language: lang,
    gitRep: git,
    status: devStatus,
    printGit: function () {
      console.log(program.gitRep);
    },
    isJavaScript: function () {
      if (program.language === "JavaScript") {
        return true;
      }
      return false;
    },
    isCompleted: function () {
      return program.status;
    }
  };
  return program;
} 
*/

function Project(description, programmingLanguage, gitRepository, status) {
  this.description = description;
  this.programmingLanguage = programmingLanguage;
  this.gitRepository = gitRepository;
  this.status = status;
  this.printRepository = function () {
    console.log(this.gitRepository);
  };
  this.isJavaScript = function () {
    return this.programmingLanguage === "JavaScript";
  };
  this.isInDevelopment = function () {
    return this.status === "in development";
  };
}

var project = new Project("project description", "JavaScript", "https://github.com/OgnjenGavric?tab=repositories", "in development");
project.printRepository();
console.log(project.isJavaScript());
console.log(project.isInDevelopment());



// 4. Write a function that creates an object that represents a culinary recipe.Each recipe is described by: name, type of cuisine, complexity(value from 1 to 5), list of ingredients, preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

/* 
function createRecipe(name, type, complex, ingredients, time, instruction) {
  var recipe = {
    recipeName: name,
    typeOfCuisine: type,
    complexity: complex,
    listOfIngredients: ingredients,
    preparingTime: time,
    preparingInstruction: instruction,
    printShopList: function () {
      console.log(recipe.listOfIngredients);
    },
    checkTime: function () {
      if (recipe.preparingTime < 15) {
        return "This meal can be made in under 15 minutes";
      }
    },
    changeCuisine: function (newType) {
      recipe.typeOfCuisine = newType;
    },
    deleteIngredient: function () {
      recipe.filter((ing) => {
        return recipe.listOfIngredients !== ing;
      });
    }

  };
  return recipe;
} 
*/
function Recipe(name, typeOfCuisine, complexity, ingredients, preparingTime, preparingInstruction) {
  this.name = name;
  this.typeOfCuisine = typeOfCuisine;
  this.complexity = complexity;
  this.ingredients = ingredients;
  this.preparingTime = preparingTime;
  this.preparingInstruction = preparingInstruction;
  this.printIngredients = function () {
    console.log(this.ingredients);
  };
  this.canBePreparedInUnder15Minutes = function () {
    return this.preparingTime <= 15;
  };
  this.changeTypeOfCuisine = function (typeOfCuisine) {
    this.typeOfCuisine = typeOfCuisine;
  };
  this.deleteIngredient = function (ingredient) {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i] === ingredient) {
        this.ingredients.splice(i, 1);
        break;
      }
    }
  };
}
var recipe = new Recipe("recipe name", "cuisine type", 5, ["ingredient1", "ingredient2", "ingredient3"], 10, "instruction");
recipe.printIngredients();
console.log(recipe.canBePreparedInUnder15Minutes());
recipe.changeTypeOfCuisine("new cuisine type");
recipe.deleteIngredient("ingredient2");

// 5. Create an object to store the following information about your favorite movie: title(a string), duration(a number), and stars(an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myFavMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printMovie(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  var starsString = "Stars: ";
  for (var i = 0; i < movie.stars.length; i++) {
    starsString += movie.stars[i];
    if (i != movie.stars.length - 1) {
      starsString += ", ";
    }
  }
  console.log(starsString);
}

// Or...
function printMovie(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  console.log("It stars " + movie.stars.join(", "));
}
printMovie(myFavMovie);