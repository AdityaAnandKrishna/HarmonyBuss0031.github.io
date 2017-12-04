/******************************HOMEPAGE************************************/

//makes image animate when hover on link
//Listens for mouseover and mouseout of three buttons
let movieBtn = document.getElementById("moviesBtn");
      movieBtn.onmouseover = function() {addhoveringClass('movie')};
      movieBtn.onmouseout = function() {removehoveringClass('movie')};

let actorsBtn = document.getElementById("actorsBtn");
      actorsBtn.onmouseover = function() {addhoveringClass('actor')};
      actorsBtn.onmouseout = function() {removehoveringClass('actor')};

let directorsBtn = document.getElementById("directorsBtn");
      directorsBtn.onmouseover = function() {addhoveringClass('director')};
      directorsBtn.onmouseout = function() {removehoveringClass('director')};

//adds hovering Class
function addhoveringClass(btn) {
    if(btn=="movie"){
    document.getElementById("movieListIcon").classList.add('hovering');
  }else if (btn=="actor"){
    document.getElementById("actorIcon").classList.add('hovering');
  }else if (btn=="director"){
    document.getElementById("directorIcon").classList.add('hovering');
  }else{

  }
}
//removes hovering Class
function removehoveringClass(btn) {
    if(btn=="movie"){
    document.getElementById("movieListIcon").classList.remove('hovering');
  }else if (btn=="actor"){
    document.getElementById("actorIcon").classList.remove('hovering');
  }else if (btn=="director"){
    document.getElementById("directorIcon").classList.remove('hovering');
  }else{

  }
}
