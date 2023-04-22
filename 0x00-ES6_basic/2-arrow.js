export default function getNeighborhoodsList() {
  // This function is intended to be used as a method of a class, 
  // where `this` refers to the instance of the class.
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];   

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);        
    return this.sanFranciscoNeighborhoods;
  };
}
