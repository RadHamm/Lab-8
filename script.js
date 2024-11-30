// Part 1.1 Create student object
let student = {
    name: "Steven Hamm",
    age: 30,
    enrolled: true,
    courses: ["Javascript", "Web Design", "Writing", "Operating Systems"],
    // Method to display basic info
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(student.name, student.age);

console.log(student.displayInfo());


let studentJSON = JSON.stringify(student);
console.log(studentJSON);

let newStudent = JSON.parse(studentJSON);
console.log(newStudent);

console.log(newStudent === studentJSON);

let { name, courses } = student;
console.log(name);
console.log(courses);

let scores = [90, 80, 70, 60, 95, 85, 75]
let [score1, score2] = scores;
console.log(score1);
console.log(score2);


