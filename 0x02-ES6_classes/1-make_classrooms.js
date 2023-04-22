import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const sizes = [19, 20, 34];
  return Array.from(sizes, size => new ClassRoom(size));
}
