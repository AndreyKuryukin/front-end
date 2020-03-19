class Person {
  name;
  tel;

  constructor(name, tel) {
    this.name = name;
    this.tel = tel;
  }
}

class Employee {
  name;
  jobTitle;

  constructor(name, jobTitle) {
    this.name = name;
    this.jobTitle = jobTitle;
  }
}

let persons = [];
let employees = [];

function createPerson() {
  let name = document.getElementById('name');
  let tel = document.getElementById('tel');
  let personDisplay = document.createElement("li");
  let employeeOption = document.createElement("option");

  personDisplay.innerHTML = `${name.value}: ${tel.value}`;
  employeeOption.value = `${name.value}`;
  employeeOption.innerHTML = `${name.value}`;
  document.getElementById('personsList').appendChild(personDisplay);
  document.getElementById('employeeName').appendChild(employeeOption);
  persons.push(new Person(name.value, tel.value));

  name.value = "";
  tel.value = "";
}

function createEmployee() {
  let employeeName = document.getElementById('employeeName');
  let jobTitle = document.getElementById('jobtitle');
  let employeeDisplay = document.createElement("li");

  employeeDisplay.innerHTML = `${employeeName.value}: ${jobTitle.value}`;
  document.getElementById('employeeList').appendChild(employeeDisplay);
  employees.push(new Employee(employeeName.value, jobTitle.value));

  employeeName.value = "";
  jobTitle.value = "";
}
