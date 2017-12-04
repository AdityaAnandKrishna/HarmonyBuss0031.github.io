/*************ACTORS PAGE****************/

function addActorImg(anActor){
// return img tag with completed path to be printed in HTML
    let src = anActor.replace(/\s+/g, ''); //this takes out white space from the name
    return ' <img src="images/actors/'+src+'.png"/>';
}

function addActorID(anActor){
// return id to be put on each actor's h3 tag
    let id = anActor.replace(/\s+/g, ''); //this takes out white space from the name
    return id;
}


//Sort Actors on Actors Page Alphabetically

//if the first actor starts with an 'A', reverse actor list
function sortActors(){
  if(allActors[0].charAt(0)=='A'){
    allActors.reverse();
    printActorList();
  }else{
    allActors.sort();
    printActorList();
  }
}

//Use array of actors to print items onto actors.html
function printActorList(){


  let actorListHTML="";

      for(let i=0; i <allActors.length; i++){

          let thisActorName = allActors[i].replace(/\s+/g, ''); //this takes the name from allActors[] and takes out spaces.

          for (var name in allPeopleInfo) {

                if (name == thisActorName){

                    actorListHTML += '<div class="row actors">'+'<div class="col-md-2"></div><div class="ActorImg col-md-1 col-sm-6">'+
                    addActorImg(allActors[i])+'</div>'+
                    '<div class="col-md-2 col-sm-1"></div>'+
                    '<div class="col-md-7 col-sm-5 actorInfo"><h3 id='+addActorID(allActors[i])+'>'+allActors[i]+'</h3>'+
                    '<h4>Birthday:</h4> <p>'+allPeopleInfo[name]['birthday']+'</p>'+
                    '<h4>Age:</h4> <p>'+allPeopleInfo[name]["age"]+'</p>'+
                    '<p class="bio">'+allPeopleInfo[name]["bio"]+'</p>'+
                    '<h4>Most popular movie:</h4> <p>'+allPeopleInfo[name]["bestMovie"]+'</p>'+
                    '</div></div>';

                }
            }
      }
  actorListContainer.innerHTML = actorListHTML;
}

sortActors();
