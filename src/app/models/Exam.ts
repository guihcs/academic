export class ExamFormDescriptor {
  date = {
    type: 'date'
  };
  time = {
    type: 'time'
  };
  local = {};
  courses = {};
}

export class Exam {
  date;
  time;
  local;
  courses;
}
