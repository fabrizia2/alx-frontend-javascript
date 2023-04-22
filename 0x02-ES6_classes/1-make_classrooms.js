import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const array = [19, 20, 34];
  const classrooms = [];

  for (let i = 0; i < array.length; i++) {
    const classroom = new ClassRoom(array[i]);
    classrooms.push(classroom);
  }

  return classrooms;
}
