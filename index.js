// Code your solution here

function findMatching(drivers,name){

    return drivers.filter((names)=>names.toLowerCase() === name.toLowerCase());


};

function fuzzyMatch(drivers,letters){
    return drivers.filter((names)=> names.startsWith(letters));
};


function matchName(drivers,searchedName){
  
    return drivers.filter(person => person.name === searchedName)
};