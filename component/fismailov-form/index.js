class Person {
	name;
	tel;

	constructor(name, tel) {
		this.name = name;
		this.tel = tel;
	}
}

class Employee extends Person {
	jobTitle;

	constructor(name, jobTitle, tel) {
		super(name, tel);
		this.jobTitle = jobTitle;
	}
}

let persons = [];
let employees = [];

function cleanUp() {
	document.getElementById('name').value = '';
	document.getElementById('tel').value = '';
	document.getElementById('employeeName').innerHTML = '';
}

function render(elements, root) {
	cleanUp();
	elements.forEach(element => {
		let personDisplay = document.createElement("li");
		let employeeOption = document.createElement("option");

		employeeOption.value = `${element.name}`;
		employeeOption.innerHTML = `${element.name}`;
		personDisplay.innerHTML = `${element.name}: ${element.tel} - ${element.jobTitle ? element.jobTitle : ''}`;

		root.appendChild(personDisplay);
		document.getElementById('employeeName').appendChild(employeeOption);
	});
}

function createPerson() {
	let name = document.getElementById('name').value;
	let tel = document.getElementById('tel').value;

	persons.push(new Person(name, tel));
	render(persons, document.getElementById('personsList'));
}

function createEmployee() {
	let employeeName = document.getElementById('employeeName').value;
	let jobTitle = document.getElementById('jobtitle').value;
	const person = persons.find((prsn) => prsn.name === employeeName);

	employees.push(new Employee(person.name, jobTitle, person.tel));
	render(employees, document.getElementById('employeeList'));
}
