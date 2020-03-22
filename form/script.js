let persons = [];
let employees = [];

class Person {
    name;
    phone;

    constructor(personName, personPhone) {
        this.personName = personName;
        this.personPhone = personPhone;
    }
}

class Employee extends Person {
    jobTitle;

    constructor(personName, personPhone, employeeJobTitle) {
        super(personName, personPhone);
        this.employeeJobTitle = employeeJobTitle;
    }
}

const onPersonSubmit = function () {

    let enteredName = document.getElementById("name");
    let enteredPhone = document.getElementById("phone");
    let personsList = document.getElementById("persons_list");
    let employeeDropdown = document.getElementById("employee_names");
    
    let newPerson = document.createElement("li");
    let newEmployeeName = document.createElement("option");

    newPerson.innerHTML = enteredName.value + ": " + enteredPhone.value;
  //  newPerson.innerHTML = '${enteredName.value}:${enteredPhone.value}';
    newEmployeeName.value = enteredName.value;
    newEmployeeName.innerHTML = enteredName.value;

    personsList.appendChild(newPerson);
    employeeDropdown.appendChild(newEmployeeName);

    persons.push(new Person(enteredName.value, enteredPhone.value));
        
    console.log(persons);

}

const onEmployeeSubmit = function () {

    let enteredJobTitle = document.getElementById("position");
    let chosenEmployeeName = document.getElementById("employee_names");
    let employeesList = document.getElementById("employees_list");

    let newEmployee = document.createElement("li");

    newEmployee.innerHTML = chosenEmployeeName.value + " (" + phone.value + "): " + enteredJobTitle.value;

    employeesList.appendChild(newEmployee);

    employees.push(new Employee(chosenEmployeeName.value, phone.value, enteredJobTitle.value));
    console.log(employees);

}

const onFocus = function () {
    if (this.value != "") this.value = "";
}






