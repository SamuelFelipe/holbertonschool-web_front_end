function createClassRoom(numberOfStudents) {
  const studentSeat = (seat) => {
    return function () {
      return seat;
    };
  };
  const students = [
    ...(function* () {
      for (let i = 1; i <= numberOfStudents; i++) {
        yield studentSeat(i);
      }
    })(),
  ];
  return students;
}

const classRoom = createClassRoom(10);
