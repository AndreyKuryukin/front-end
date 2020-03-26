let persons = [];
let employees = [];

class Person {
    personName;
    personPhone;

    constructor(personName, personPhone) {
        this.personName = personName;
        this.personPhone = personPhone;
    }
}

class Employee extends Person {
    employeeJobTitle;

    constructor(personName, personPhone, employeeJobTitle) {
        super(personName, personPhone);
        this.employeeJobTitle = employeeJobTitle;
    }
}

const render = function (elements, root) {
    root.innerHTML = '';

    elements.forEach(element => {

    let newSomeone = document.createElement("li");
    let newEmployeeName = document.createElement("option");

    console.log("!!!! " + element.personName)

    newEmployeeName.value = element.personName;
    newEmployeeName.innerHTML = element.personName;
    newSomeone.innerHTML = `${element.personName} (${element.personPhone}) ${element.enteredJobTitle ? element.enteredJobTitle : ''}`;

    root.appendChild(newSomeone);
    document.getElementById("employee_names").appendChild(newEmployeeName);

    });
}


const onPersonSubmit = function () {

    let enteredName = document.getElementById("name");
    let enteredPhone = document.getElementById("phone");
    let personsList = document.getElementById("persons_list");
 //   let employeeDropdown = document.getElementById("employee_names");
    
 //   let newPerson = document.createElement("li");
 //   let newEmployeeName = document.createElement("option");

 //   newPerson.innerHTML = `${enteredName.value}: ${enteredPhone.value}`;
 //   newEmployeeName.value = enteredName.value;
 //   newEmployeeName.innerHTML = enteredName.value;

 //   personsList.appendChild(newPerson);
 //   employeeDropdown.appendChild(newEmployeeName);

    persons.push(new Person(enteredName.value, enteredPhone.value));
    render(persons, personsList);
        
    console.log(persons);

}

const onEmployeeSubmit = function () {

    let enteredJobTitle = document.getElementById("position");
    let chosenEmployeeName = document.getElementById("employee_names").value;
    let employeesList = document.getElementById("employees_list");
    const phone =  persons.find((person) => person.personName === chosenEmployeeName).personPhone;

//    let newEmployee = document.createElement("li");

//    const employee = new Employee(chosenEmployeeName, pnone, enteredJobTitle.value);

//    newEmployee.innerHTML = `${employee.personName}(${pnone}): ${employee.employeeJobTitle}`;

//    employeesList.appendChild(newEmployee);

    employees.push(new Employee(chosenEmployeeName, phone, enteredJobTitle.value));
    render(employees, employeesList)
    console.log(employees);

}

const onFocus = function () {
    if (this.value != "") this.value = "";
}






