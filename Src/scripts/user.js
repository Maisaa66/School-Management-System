class User {
  constructor(id, name, userN, passW, crss) {
    this.name = name;
    this.id = id;
    this.userName = userN ? userN : name;
    this.password = passW ? passW : name + 123456;
    this.coursesId = crss ? crss : [];
    // Login method
    this.login = function (url) {
      localStorage.setItem("stdData", JSON.stringify(this));
      location.assign(url);
    };
    //Logout method
    this.logout = function () {
      location.assign("../../index.html");
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

    this.AddStudent = function (Student) {
      window.localStorage.setItem(
        "Student" + Student.id,
        JSON.stringify(Student)
      );
      location.reload();
      alert("Student added successfully");

      updateData();
    };

    this.addTeacher = function (Teacher) {
      window.localStorage.setItem(
        "Teacher" + Teacher.id,
        JSON.stringify(Teacher)
      );
      location.reload();
      alert("Teacher added successfully");
      updateData();

    };

    this.addCourse = function (Courses) {
      window.localStorage.setItem(
        "Courses" + Courses.id,
        JSON.stringify(Courses)
      );
      location.reload();
      alert("Course added successfully");
      updateData();

    };

    this.deleteStudent = function (id) {
      localStorage.removeItem("Student" + id);
      updateData();

    };
    this.deleteTeacher = function (id) {
      localStorage.removeItem("Teacher" + id);
      updateData();

    };
    this.deleteCourse = function (id) {
      localStorage.removeItem("Courses" + id);
      updateData();

    };
    this.editStudent = function (newStData, student_id) {
      localStorage.setItem("Student" + student_id, JSON.stringify(newStData));
      updateData();

    };
    this.editTeacher = function (newTchData, teacher_id) {
      localStorage.setItem("Teacher" + teacher_id, JSON.stringify(newTchData));
      updateData();

    };
    this.editCourse = function (newCrsData, course_id) {
      localStorage.setItem("Courses" + course_id, JSON.stringify(newCrsData));
      updateData();

    };
  }
}

class Courses {
  constructor(id, name, tchId, numStds, description, content) {
    this.id = id;
    this.name = name;
    this.tchId = tchId;
    this.numStds = numStds;
    this.description = description;
    this.content = content;
    this.stdGrades = [];
  }
}
