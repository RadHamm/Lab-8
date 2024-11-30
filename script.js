let student = {
    name: "Steven Hamm",
    age: 30,
    enrolled: true,
    courses: ["Javascript", "Web Design", "Writing", "Operating Systems"],
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