/*************DIRECTORS PAGE****************/

function addDirectorImg(aDirector){
// Separate directors and print as <img>
    let src = aDirector.replace(/\s+/g, ''); //this takes out white space from the name
    return ' <img src="images/directors/'+src+'.png"/>';
}

function addDirectorID(aDirector){
// Separate directors and print as a ids
    let id = aDirector.replace(/\s+/g, ''); //this takes out white space from the name
    return id;
}


//Use array of actors to print items ontodirectors.html
/*function printDirectorList(){

  let directorListHTML="";

    for(let i=0; i <allDirectors.length; i++){
        directorListHTML += '<div class="row directors">'+'<div class="col-md-2"></div><div class="DirectorImg col-md-1 col-sm-12">'+
        addDirectorImg(allDirectors[i])+
        '</div>'+
        '<div class="col-md-2 col-lg-2"></div>'+
        '<div class="col-md-7 col-sm-12"><h3 id="'+addDirectorID(allDirectors[i])+'">'+allDirectors[i]+'</h3>'+
        '</div></div>';
    }
//HERE
  directorsListContainer.innerHTML = directorListHTML;
}*/



//Use array of actors to print items onto actors.html
function printDirectorList(){


  let DirectorListHTML="";

      for(let i=0; i <allDirectors.length; i++){

          let thisDirectorName = allDirectors[i].replace(/\s+/g, ''); //this takes the name from allActors[] and takes out spaces.

          for (var name in allPeopleInfo) {

                if (name == thisDirectorName){

                    DirectorListHTML += '<div class="row actors">'+'<div class="col-md-2"></div><div class="ActorImg col-md-1 col-sm-6">'+
                    addDirectorImg(allDirectors[i])+'</div>'+
                    '<div class="col-md-2 col-sm-1"></div>'+
                    '<div class="col-md-7 col-sm-5 actorInfo"><h3 id='+addDirectorID(allDirectors[i])+'>'+allDirectors[i]+'</h3>'+
                    '<h4>Birthday:</h4> <p>'+allPeopleInfo[name]['birthday']+'</p>'+
                    '<h4>Age:</h4> <p>'+allPeopleInfo[name]["age"]+'</p>'+
                    '<p class="bio">'+allPeopleInfo[name]["bio"]+'</p>'+
                    '<h4>Most popular movie:</h4> <p>'+allPeopleInfo[name]["bestMovie"]+'</p>'+
                    '</div></div>';

                }
            }
      }
      directorListContainer.innerHTML = DirectorListHTML;
}


sortDirectors();


function sortDirectors(){
  if(allDirectors[0].charAt(0)=='A'){
    allDirectors.reverse();
    printDirectorList();
  }else{
    allDirectors.sort();
    printDirectorList();
  }
}
