//Hello, this is my Web Production MTM6330- 010 midterm.  Harmony Hawthorn 2017.

/*Info for movie list page*/
const titles = [
  "Enter the Dragon",
  "Infernal Affairs",
  "Kung Fu Hustle",
  "Drunken Master II",
  "Ran",
  "Yojimbo",
  "Hero"
];

const images =[
  "EnterTheDragon",
  "InfernalAffairs",
  "KungFuHustle",
  "DrunkenMasterII",
  "Ran",
  "Yojimbo",
  "Hero"
];

const synopsis = [
  "A martial artist enters into a tournament in order to spy on a crime lord.",
  "An undercover cop and a mole in the police department hunt each other out.",
  "A poor man aspires to join the Axe Gang, a 1940s Shanghai mob. The Axe Gang terrorizes the residents of a housing complex, but it seems they bit off more than they can chew.",
  "A young martial artist fights artifact stealing thieves. His drunken fighting style grows as he consumes more alcohol.",
  "A retired warlord must hand over his empire to his three sons. The power struggle turns his sons against him and each other.",
  "A wayfaring samurai wanders into a town where he pits two criminal gangs against one another.",
  "A defense officer, recounts to the King of Qin how he was able to slay three devastating warriors."
];

const directors = [
  ["Robert Clouse"],
  ["Andy Lau", "Alan Mak"],
  ["Stephen Chow"],
  ["Lau Kar-leung"],
  ["Akira Kurosawa"],
  ["Akira Kurosawa"],
  ["Yimou Zhang"]
];

const actors = [
  ["Bruce Lee","John Saxon","Jim Kelly"],
  ["Andy Lau","Tony Leung","Eric Tsang","Anthony Wong"],
  ["Stephen Chow", "Xiaogang Feng", "Wah Yuen", "Qiu Yuen"],
  ["Jackie Chan","Anita Mui","Lau Kar-leung"],
  ["Tatsuya Nakadai"],
  ["Toshirô Mifune", "Tatsuya Nakadai"],
  ["Jet Li", "Tony Leung", "Ziyi Zhang", "Maggie Cheung", "Donnie Yen"]
];

const year  = [
  "1973",
  "2002",
  "2004",
  "1994",
  "1985",
  "1961",
  "2002"
];





//Section     A - Functions to work with info easier
//Section     B - Scripts that Manage Content on each html page



/* SECTION A **********///////************ Functions to work with info easier **************\\\\\\\\\*********/
//
//
//                            i.    movie info
//                                     - build movie list (allMovieInfo)
//                            ii.   actors info
//                                     - build actor list (allActors)
//                            iii.  directors info
//                                     - build director list (allDirectors)
//                            iv.   people info
//                                     -place actors in allPeople[]
//                                     -place directors in allPeople[]
//                                     -build allPeopleInfo[]



/********************************* i. MOVIE INFO *****************************/

let movieListContainer = document.getElementById('movies');
let allMovieInfo = [];

//Create an array of info for every movie
function buildMovieList(){

  for(let i=0; i < titles.length; i++){

      var mov = {
          'title':titles[i],
          'src':images[i],
          'synopsis':synopsis[i],
          'directors':directors[i],
          'actors':actors[i],
          'year':year[i]
        };

        //add to each set of info to allMovieInfo Array
        allMovieInfo.push(mov);

    }

}


/*************************** ii. ACTORS INFO *****************************/

let actorListContainer = document.getElementById('actors');
let allActors = []; //Unique entities

//-----separate unique actors from actors array
actors.forEach(function(actor){  // this actor variable holds each subarray(movie)

  for (var i = 0; i < actor.length; i++) {
    //check if allActor contains actor[i], if not add to allActors[]
    if (allActors.includes(actor[i])){
    }else{
    allActors.push(actor[i]);
    }
  }

})


/*********************** iii. DIRECTORS INFO ***************************/

let directorListContainer = document.getElementById('directors');
let allDirectors = [];

//-----separate and create array of individual directors from directors array
directors.forEach(function(director){ // this director variable holds each subarray

  for (var i = 0; i < director.length; i++) {
    //check if the director exists in allDirectors[]
    //if not add to allDirectors[]
    if (allDirectors.includes(director[i])){
    }else{
    allDirectors.push(director[i]);
    }
  }
})


/*************************** iv. PEOPLE INFO ***********************************/

/*let allPeople = [];
let allPeopleInfo = [];

//-----separate and put into array of unique people from directors array
allDirectors.forEach(function(person){

  for (var i = 0; i < person.length; i++) {
    //check if the director exists in allPeople[]
    //if not add to allPeople[]
    if (allPeople.includes(person[i])){
    }else{
    allPeople.push(person[i]);
    }
  }
})

//-----separate and put into array of unique people from actors array
allActors.forEach(function(person){

  for (var i = 0; i < person.length; i++) {
    //check if the director exists in allPeople[]
    //if not add to allPeople[]
    if (allPeople.includes(person[i])){
    }else{
    allPeople.push(person[i]);
    }
  }
})

*/


/* SECTION B **********///////************Scripts that Manage Content on Pages**************\\\\\\\\\*********/
//
//
//                            scripts.js manages content on index.html
//                                - hover states on buttons
//
//                            movies.js manages content on movies.html
//                                - create anchors for each actor on movies.html
//                                - create anchors for each director on movies.html
//                                - print movie list HTML to page
//                                - sort movie list
//
//                            actors.js manages content on actors.html
//                                - print actor list and allPeopleInfo HTML to page
//                                - sort actor list
//                                - create href and id links for each actors on actors.html
//
//                            directors.js manaeges content on directors.html
//                                - print directors list and allPeopleInfo HTML to page
//                                - sort directors list
//                                - create href and id links for each director on directors.html
