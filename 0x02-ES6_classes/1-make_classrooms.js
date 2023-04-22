import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const arrays = [19, 20, 34];
  return arrays.map(arrays => new ClassRoom(arrays));
}
