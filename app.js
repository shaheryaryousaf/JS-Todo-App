var list = document.getElementById("list-group");

function addItem() {

    // Todo Input Value 
    var todo_item = document.getElementById("todo-item");

    // Create li and textnode
    var li = document.createElement("li");
    var textNode = document.createTextNode(todo_item.value);
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
    li.appendChild(textNode)


    // Create Delete Btn and append to li
    var delBtn = document.createElement("span");
    delBtn.setAttribute("class", "btn btn-danger");
    delBtn.setAttribute("onclick", "delItem(this)");
    delBtn.appendChild(document.createTextNode("Delete"));


    // Create Edit Btn and append to li
    var editBtn = document.createElement("span");
    editBtn.setAttribute("class", "btn btn-success mr-2");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(document.createTextNode("Edit"));


    // Create Span for buttons
    var span = document.createElement("span");
    span.setAttribute("class", "flex-row-reverse");
    span.appendChild(editBtn);
    span.appendChild(delBtn);
    li.appendChild(span);


    // Append li to ul
    list.appendChild(li)

    // Empty Input
    todo_item.value = "";
}

function editItem(e) {
    var value = e.parentNode.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter your text", value);
    e.parentNode.parentNode.firstChild.nodeValue = newValue;
}

function delItem(e) {
    e.parentNode.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = "";
}