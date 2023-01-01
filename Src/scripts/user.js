class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;

    // Private
    let username = name;
    let password = name + 123456;

    // Getters
    this.getUsername = function () {
      return username;
    };
    this.getPassword = function () {
      return password;
    };

    // Login method
    this.login = function () {};
  }
}

class Student extends User {
  constructor(id, name) {
    super(id, name); // Parent constructor
    this.courses = [];
    this.viewCoursesGrades = function () {};
    this.viewStdProfile = function () {};
  }
}

class Teacher extends User {
  constructor(id, name) {
    super(id, name); // Parent constructor
    this.courses = [];
    this.addGrade = function () {};
    this.editGrade = function () {};
    this.editCourseContent = function () {};
    this.correctExam = function () {};
  }
}
class Admin extends User {
  constructor(id, name) {
    super(id, name); // Parent constructor
    this.AddStudent = function () {};
    this.addTeacher = function () {};
    this.deleteStudent = function () {};
    this.deleteTeacher = function () {};
    this.editStudent = function () {};
    this.editTeacher = function () {};
    this.assignTchCourse = function () {};
    this.assignStdCourse = function () {};
  }
}

class Courses {
  constructor(id, name, tchId, numStds, description, content) {
    this.crsId = id;
    this.name = name;
    this.tchId = tchId;
    this.numStds = numStds;
    this.description = description;
    this.content = content;
    this.stdGrades = [];
  }
}
