// Student
// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:
// 
// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
// > foo = createStudent('Foo', '1st');
// > foo.info();
// = Foo is a 1st year student
// > foo.listCourses();
// = [];
// > foo.addCourse({ name: 'Math', code: 101 });
// > foo.addCourse({ name: 'Advanced Math', code: 102 });
// > foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// > foo.addNote(101, 'Fun course');
// > foo.addNote(101, 'Remember to study for algebra');
// > foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
// > foo.addNote(102, 'Difficult subject');
// > foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
// = Advanced Math: Difficult Subject
// > foo.updateNote(101, 'Fun course');
// > foo.viewNotes();
// = Math: Fun Course
// = Advanced Math: Difficult Subject
//
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

/*
add note

  - takes a code and string
  - uses code to find course in courses
  - creates, or adds to a note property
  - notes is an array of notes that is joined with ;
 
viewNotes
  - for any course that has notes
    - logs course: joined notes

updateNote
  - takes code and note
  - replaces all of the old notes with the new one
*/ 

drew = createStudent('Drew', '2nd');
console.log(drew.info());
console.log(drew.listCourses());
drew.addCourse({name: 'Math', code: 101});
console.log(drew.listCourses());
drew.addCourse({ name: 'Advanced Math', code: 102 });
console.log(drew.listCourses());
drew.addNote(101, 'Fun course');
drew.addNote(101, 'Remember to study for algebra');
drew.viewNotes();
drew.addNote(102, 'Difficult subject');
drew.viewNotes();
drew.updateNote(101, 'Fun course');
drew.viewNotes();

