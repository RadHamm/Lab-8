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