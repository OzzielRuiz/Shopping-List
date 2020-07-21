var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArray = document.querySelectorAll("li");

function deleteButtons(){
	
	liArray.forEach(li => {
		var deleteButton = document.createElement("button");
		deleteButton.innerHTML = "delete";
		deleteButton.addEventListener("click",deleteLiItem);
		li.appendChild(deleteButton);
	});
}

deleteButtons();
function inputLength() {
	return input.value.length;
}

function deleteLiItem(event){
	event.target.parentElement.remove();
}

function createListElement() {
	var li = document.createElement("li");
	console.log(li);
	li.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("button");
		deleteButton.innerHTML = "delete";
		deleteButton.addEventListener("click", deleteLiItem);
		li.appendChild(deleteButton);
	li.addEventListener("click", ListToogleDoneClass);
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function ListToogleDoneClass(event){
		var liToggle = event.target;
		liToggle.classList.toggle("done");
}



liArray.forEach(li => {
	li.addEventListener("click", ListToogleDoneClass);
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);