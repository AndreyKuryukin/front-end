class Person {
  name;
  tel;

  constructor(name, tel) {
    this.name = name;
    this.tel = tel;
  }
}

class Employee extends Person{ 
  name;
  jobTitle;

  constructor(name, jobTitle, tel) {
    super(name, tel)
    this.jobTitle = jobTitle;
  }
}

let persons = [];
let employees = [];


function render(elemnts, root) {
  root.innerHTML = '';
  elemnts.forEach(element => {
    let personDisplay = document.createElement("li");
    personDisplay.innerHTML = `${element.name}: ${element.tel} - ${element.jobTitle ? element.jobTitle : ''}`;
    root.append(personDisplay)
  });
}

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
  render(employees, document.getElementById('employeeList'))
  employeeName.value = "";
  jobTitle.value = "";
}
