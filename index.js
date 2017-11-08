// Code your solution in this file!
function distanceFromHqInBlocks (location, hq) {
  return (hq - location)

}

function distanceFromHqInFeet () {
  var ftDist = distanceFromHqInBlocks();
  return ftDist * 264
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

