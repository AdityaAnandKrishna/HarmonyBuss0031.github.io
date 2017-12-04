/*************MOVIES PAGE****************/


let $listOrder="asc"; // this is to toggle A/Z switch on movies.html

/*-------separate actors in movie to be printed in movieList HTML--------*/
function printActorsInMovieHTML(i){
// Separate actors and print as <a>
  actorsInMovieHTML = '';
  allMovieInfo[i]['actors'].forEach(function(x){
    let href = x.replace(/\s+/g, ''); //this takes out white space from the name
    actorsInMovieHTML += ' <a href="actors.html#'+href+'">'+x+'</a>';
  })
  return actorsInMovieHTML;
}

/*----Separate directors in movie to be printed in movieList HTML------*/
function printDirectorsOfMovieHTML(i){
// Separate directors and make them print out as <a>
  directorsOfMovieHTML = '';
  allMovieInfo[i]['directors'].forEach(function(x){
    let href = x.replace(/\s+/g, ''); //this takes out white space from the name
    directorsOfMovieHTML += ' <a href="directors.html#'+href+'">'+x+'</a>';
  })
  return directorsOfMovieHTML;
}


//Uses allMovieInfo + actorsInMovieHTML + directorsOfMovieHTMLs to print items onto movies.html
function printMovieList(){

  let movieListHTML="";

    for(let i=0; i <allMovieInfo.length; i++){

        movieListHTML += '<div class="row movies">'+'<div class="col-md-1"></div><div class="clipImg col-md-3 col-sm-12">'+
        '<img src="images/movies/'+allMovieInfo[i]['src']+'.png" alt="'+allMovieInfo[i]['src']+'"/>'+
        '</div>'+
        '<div class="col-md-3 col-lg-2"></div>'+
        '<div class="col-md-5 col-sm-12"><h3>'+allMovieInfo[i]['title']+'</h3><p>'+allMovieInfo[i]['synopsis']+'</p>'+
        '<p>Directors: '+printDirectorsOfMovieHTML(i)+'</p>'+
        '<p>Actors:'+printActorsInMovieHTML(i)+'</p>'+
        '<p>'+allMovieInfo[i]['year']+'</p>'+
        '</div></div>';
    }

  movieListContainer.innerHTML = movieListHTML;
}

buildMovieList();
sortMovies();


//sort movies alphabetically by title
function sortMovies(){

  if($listOrder=='asc'){
      allMovieInfo.sort(function(a,b){
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1;
          return 0;
       })
       $listOrder = 'desc';
       printMovieList();
  }else{
    allMovieInfo.reverse();
    $listOrder = 'asc';
    printMovieList();
  }

}
