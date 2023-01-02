class User {
  constructor(id, name, userN, passW, crss) {
    this.id = id;
    this.name = name;
    this.courses = crss ? crss : [];
    // Private
    let userName = userN ? userN : name;
    let password = passW ? passW : name + 123456;
    

    // Getters
    this.getUsername = function () {
      return userName;
    };
    this.getPassword = function () {
      return password;
    };
    // Login method
    this.login = function (url) {
      localStorage.setItem("stdData", JSON.stringify(this));
      location.assign(url);
    };
  }
}

class Student extends User {
  constructor(id, name, userName, password, crss) {
    super(id, name, userName, password, crss); // Parent constructor
    this.viewCoursesGrades = function (profile, grades, profileBtn, gradesBtn) {
      profile.classList.toggle("hidden");
      grades.classList.toggle("hidden");
      profileBtn.classList.toggle("active");
      gradesBtn.classList.toggle("active");
    };
    this.viewStdProfile = function (profile, btn) {
      profile.classList.toggle("hidden");
      btn.classList.toggle("active");
    };
  }
}

class Teacher extends User {
  constructor(id, name, username, password, crss) {
    super(id, name, username, password, crss); // Parent constructor
    this.addGrade = function () {};
    this.editGrade = function () {};
    this.editCourseContent = function () {};
    this.correctExam = function () {};
  }
}
class Admin extends User {
  constructor(id, name, username, password) {
    super(id, name, username, password); // Parent constructor
    this.AddStudent = function () {};

    this.addTeacher = function (Teacher) {
      window.localStorage.setItem("tchData"+Teacher.id, JSON.stringify(Teacher));
      location.reload();
      alert("Teacher added successfully");
    };

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
