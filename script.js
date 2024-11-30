// Part 1.1 Create student object
let student = {
    name: "Steven Hamm",
    age: 30,
    enrolled: true,
    courses: ["Javascript", "Web Design", "Writing", "Operating Systems"],
    // Method to display basic info
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    // Part 5: Adding new methods to student object
    addCourse: function(courseName) {
        this.courses.push(courseName);
    },
    // Part 5.2: Add method to calculate and return total courses
    numberOfTotalCourses: function() {
        return this.courses.length;
    }
};

console.log(student.name, student.age);
// call method for basic info
console.log(student.displayInfo());

// Part 2 convert student object into string
let studentJSON = JSON.stringify(student);
console.log(studentJSON);
// convert json string back into JS object
let newStudent = JSON.parse(studentJSON);
console.log(newStudent);
// compares new to original
console.log(newStudent === studentJSON);

//Part 3 1.1 extract name and course from student object
let { name, courses } = student;
console.log(name);
console.log(courses);
// 1.2 create array and extract first two scores
let scores = [90, 80, 70, 60, 95, 85, 75]
let [score1, score2] = scores;
console.log(score1);
console.log(score2);

// Part 4 clone object student and add a new property
let clonedStudent = { ...student, graduationYear: 2026 };
console.log(clonedStudent);
// 4.3 merge arrays
let newCourses = ["Algorithms", "Database Concepts"];
let combinedCourses = [...student.courses, ...newCourses];
console.log(combinedCourses);

// Bonus Task reduce method to calculate average score from array scores


