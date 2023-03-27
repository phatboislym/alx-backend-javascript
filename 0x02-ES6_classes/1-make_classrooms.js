/* eslint-disable */
import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const x1 = new ClassRoom(19);
  const x2 = new ClassRoom(20);
  const x3 = new ClassRoom(34);
  const x4 = [x1, x2, x3];
  return (x4);
}
module.exports = initializeRooms;
