// code your solution here

function superbowlWin(record) {
  let result = record.find(record => record.result === "W")
  //look for a result that is equal to our desired  answer 
  if(result) {
    return result.year;
  } else {
    return undefined;
  }
}

const sadReality =record.find(record => record.result === "N/A")


function superbowl (sadReality){
  return sadReality;
}