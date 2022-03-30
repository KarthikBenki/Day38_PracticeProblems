let dogs = ["Bulldog","Beagle","Labrador"]

//OLD WAY
var allDogs = "";
for(var i = 0;i<dogs.length;i++){
    allDogs+=dogs[i]+" ";
}

console.log("OLD: "+allDogs)

//NEW WAY
allDogs = "";
for(let dog of dogs){
    allDogs+=dog+" ";
}

console.log("NEW: "+allDogs)