
var rowId = 0;

document.getElementById("petsave-button").onclick = function () {
	rowId += 1;

	let pet = {
		dateInput: document.getElementById("date-input").value,
		ownerInput: document.getElementById("owner-input").value,
		petNameInput: document.getElementById("petname-input").value,
		petAgeInput: +document.getElementById("petage-input").value,
		petSpeciesInput: document.getElementById("petspecies-input").value,
		petSizeInput: document.getElementById("petsize-input").value,
	}

	let tr = document.createElement("tr");
	tr.setAttribute("id", "row-" + rowId);

	let tdId = document.createElement("td");
	tdId.innerHTML = rowId;
	tr.appendChild(tdId);

	Object.keys(pet).forEach((key) => {
		console.log(key);

		let td = document.createElement("td");
		td.innerHTML = pet[key];

		tr.appendChild(td);

	});

	let tdActions = document.createElement("td");
	
	let input = document.createElement("input");
	input.setAttribute("id", "delete-" + rowId);
	input.setAttribute("type", "button");
	input.value = "Eliminar";
	input.onclick = function () {
		let id = this.getAttribute("id");
		id = +id.replace("delete-", "");

		document.getElementById("row-" + id).remove();


	};

	tdActions.appendChild(input);
	
	tr.appendChild(tdActions);

	document.getElementById("body-table").appendChild(tr);

};















/*var i = true;

var student = {
	name: "Pepito Perez",
	age: 25,
	faculty: "Systems",
	active: true,
	sayHello: function() {
		console.log("Hello, my name is ", this.name);
	},
	sayHelloWithArrow: () => {
		let message = "Hello, world!";
		console.log(message);
	}
};

var printMessage = function (i = false) {
	if(i) {
		console.log("Hello world!");
	} else {
		console.log("Good bye!");
	}	
}

printMessage();*/