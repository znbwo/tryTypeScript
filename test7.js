var Student = (function () {
    function Student(middleInitial, lastName) {
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("M.", "User");
greeter(user);
