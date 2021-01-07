// School
// Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.



/*
- school object
  - students: collection of student objects
  - methods update info about student
    - add student
      - creates a new student and adds to collection of students
        - must have valid year 1st - 5th
        - returns student object or logs 'Invalid Year'
    - enroll student
      - enrolls student in course using the students add course method
    - add grade
      - adds a grade property to a specific course for a student
    - get report card
      - takes a student argument
        - logs all of their grades or in progress if there is no grade for a course
          - Math: 95
          - Science: In progress
    - course report
      - takes course input and logs grades of all students with grades
      - students without grades are not included
      - // school.courseReport('Math');
        // = =Math Grades=
        // = foo: 95
        // = bar: 91
        // = qux: 93
        // = ---
        // = Course Average: 93

        create course report object that has class keys whos value is an array of student report objects with name and grade
        {'Advanced Math': [{foo: 95}, {bar: 91}],} 
        iterate through students
          - iterate through courses
          - for each course add {studentName: grade} to course report object if course key exisits, if not create it

*/

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

let school = {
  students: [foo, bar, qux],
  addStudent(name, year) {
    let validYears = '1st 2nd 3rd 4th 5th';
    if (validYears.includes(year)) {
      return this.students.push(createStudent(name, year));
    } else {
      console.log('Invalid Year');
    }
  },

  returnStudent(name) {
    return this.students.filter(student => student.name === name)[0];
  },

  enrollStudent(name, course) {
    let student = this.returnStudent(name);
    student.addCourse(course);
  },

  addGrade(name, code, grade) {
    let student = this.returnStudent(name);
    let course = student.courses.filter(course => course.code === code)[0];
    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(name) {
    let student = this.returnStudent(name);
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In Progress`);
      }
    });
  },

  courseReport(courseQuery) {
    let grades = [];
    let result = [];

    this.students.forEach(student => {
      let course = student.courses.filter(course => course.name === courseQuery)[0] || [];
      let courseGrade = course.grade;
      if (courseGrade) {
        grades.push(course.grade);
        result.push(`${student.name}: ${course.grade}`);
      }
    });
    // console.log(result);

    if (result.length > 0) {
      console.log(`=${courseQuery} Grades=`);
      result.forEach(student => {
        console.log(student);
      });
      console.log('---');
      let average = grades.reduce((sum, num) => sum + num) / grades.length;
      console.log(`Course Average: ${average}`);
    }
  },
};
/*
    - course report
      - takes course input and logs grades of all students with grades
      - students without grades are not included
      - // school.courseReport('Math');
        // = =Math Grades=
        // = foo: 95
        // = bar: 91
        // = qux: 93
        // = ---
        // = Course Average: 93

        create course report object that has class keys whos value is an array of student report objects with name and grade
        {'Advanced Math': [{foo: 95}, {bar: 91}],} 
        iterate through students
          - return course
          - add {studentName: grade} to course report object if course key exisits, if not create it
*/

// school.addStudent('foo', '3rd');
// school.addStudent('bar', '1st');
// school.addStudent('qux', '2nd');
// school.enrollStudent('foo', { name: 'Math', code: 101 });
// console.log(school.students[0].courses);
// school.addGrade('foo', 101, 95);
// console.log(school.students[0]);
// console.log(school.students[0].courses);
// school.getReportCard('foo');
// school.courseReport('Math');

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

// getReportCard output
// school.getReportCard('foo');
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// courseReport output
school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      return `${name} is a ${year} year student.`;
    },
    
    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },
    
    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = course.notes || [];
          course.notes.push(note);
        }
      });      
    },

    viewNotes() {
      let courses = this.courses.filter(course => course.notes);
      // console.log('here');
      // console.log(courses);
      courses.forEach(course => {
        console.log(`${course.name}: ${course.notes.join('; ')}`);
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = [note];
        }
      });
    },
  };
}

// drew = createStudent('Drew', '2nd');
// // console.log(drew.info());
// // console.log(drew.listCourses());
// drew.addCourse({name: 'Math', code: 101});
// // console.log(drew.listCourses());
// drew.addCourse({ name: 'Advanced Math', code: 102 });
// // console.log(drew.listCourses());
// drew.addNote(101, 'Fun course');
// drew.addNote(101, 'Remember to study for algebra');
// // drew.viewNotes();
// drew.addNote(102, 'Difficult subject');
// // drew.viewNotes();
// drew.updateNote(101, 'Fun course');
// // drew.viewNotes();
// console.log(drew);


