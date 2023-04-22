export default function getNeighborhoodsList() {
  const obj = {
    sanFranciscoNeighborhoods: ['SOMA', 'Union Square'],
    addNeighborhood(newNeighborhood) {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    }
  };
  return obj;
}
