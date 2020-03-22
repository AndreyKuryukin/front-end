let persons = [];
let employees = [];

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

  //  persons.push(new Person(name.value, phone.value));

  //  name.value = "";
  //  phone.value = "";
}

const onEmployeeSubmit = function () {

    let enteredJobTitle = document.getElementById("position");
    let chosenEmployeeName = document.getElementById("employee_names");
    let employeesList = document.getElementById("employees_list");

    let newEmployee = document.createElement("li");

    newEmployee.innerHTML = chosenEmployeeName.value + ": " + enteredJobTitle.value;

    employeesList.appendChild(newEmployee);

}

const onFocus = function () {
    if (this.value == "Sample") this.value = "";
}

class Person {
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

class Employee extends Person {
    jobTitle;

    constructor(name, phone, jobTitle) {
        super(name, phone);
        this.jobTitle = jobTitle;
    }
}





