// Code your solution in this file!
function distanceFromHqInBlocks(block1, block2=42){ 
  return(Math.abs(block1-block2)); 
}

function distanceFromHqInFeet(block) { 
  return(264*distanceFromHqInBlocks(block)); 
}

function distanceTravelledInFeet(block1, block2) {
  return(Math.abs(block1-block2)*264);
}

function calculatesFarePrice(start, destination){
  const dist = distanceTravelledInFeet(start, destination)
  if(dist <= 400) {
    return 0; 
  } else if (dist > 400 && dist <= 2000) {
    return 0.02*(dist-400);
  } else if (dist > 2000 && dist <= 2500) {
    return 25; 
  } else if (dist > 2500) {
    return 'cannot travel that far'; 
  }
}