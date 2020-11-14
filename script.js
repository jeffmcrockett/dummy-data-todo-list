// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

const fetchToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/ToDos')
    .then( (response) => response.json())
    .then( (json) => arrayOfToDos = json)
    console.log("fetching")
}

const logToDos = () => {
    console.log(arrayOfToDos)
}

const populateToDos = () => {
    const setToDo = document.getElementById("todo-list")
    for (let index = 0; index < arrayOfToDos.length; index++) {
        console.log(index)
        const listItem = document.createElement("li")
        const text = document.createTextNode(arrayOfToDos[index].title);
            console.log(arrayOfToDos[index].title)
        listItem.appendChild(text)
        setToDo.appendChild(listItem)
    }
}

const filterArrayOfToDos = () => {
    const userNumber = document.getElementById("numUser").value
    console.log(userNumber)
        let filteredArrayOfToDos = arrayOfToDos.filter(todo => todo.userId == userNumber)
    console.log(filteredArrayOfToDos)
  removeElements()
  populateFilteredToDos(filteredArrayOfToDos)
}

const populateFilteredToDos = (filteredArrayOfToDos) => {
    const setToDo = document.getElementById("todo-list")
    for (let index = 0; index < filteredArrayOfToDos.length; index++) {
        console.log(index)
        const listItem = document.createElement("li")
        const text = document.createTextNode(filteredArrayOfToDos[index].title);
            console.log(filteredArrayOfToDos[index].title)
        listItem.appendChild(text)
        setToDo.appendChild(listItem)
    }
}

const filterIncompleteArrayOfToDos = () => {
    const userNumber = document.getElementById("numUser").value
    console.log(userNumber)
        let filteredArrayOfToDos = arrayOfToDos.filter(todo => todo.userId == userNumber)
        let incompleteArrayOfToDos = filteredArrayOfToDos.filter(todo => todo.completed == false)
    console.log(incompleteArrayOfToDos)
    removeElements()
    populateIncompleteArrayOfToDos (incompleteArrayOfToDos)
}

const populateIncompleteArrayOfToDos = (incompleteArrayOfToDos) => {
    const setToDo = document.getElementById("todo-list")
    for (let index = 0; index < incompleteArrayOfToDos.length; index++) {
        console.log(index)
        const listItem = document.createElement("li")
        const text = document.createTextNode(incompleteArrayOfToDos[index].title);
            console.log(incompleteArrayOfToDos[index].title)
        listItem.appendChild(text)
        setToDo.appendChild(listItem)
    }
}

const filterCompletedArrayOfToDos = () => {
    const userNumber = document.getElementById("numUser").value
    console.log(userNumber)
        let filteredArrayOfToDos = arrayOfToDos.filter(todo => todo.userId == userNumber)
        let completedArrayOfToDos = filteredArrayOfToDos.filter(todo => todo.completed == true)
    console.log(completedArrayOfToDos)
    removeElements()
    populateCompletedArrayOfToDos (completedArrayOfToDos)
}

const populateCompletedArrayOfToDos = (completedArrayOfToDos) => {
    const setToDo = document.getElementById("todo-list")
    for (let index = 0; index < completedArrayOfToDos.length; index++) {
        console.log(index)
        const listItem = document.createElement("li")
        const text = document.createTextNode(completedArrayOfToDos[index].title);
            console.log(completedArrayOfToDos[index].title)
        listItem.appendChild(text)
        setToDo.appendChild(listItem)
    }
}

const removeElements = () => {
    const allListElements = document.querySelectorAll("li")
    console.log(allListElements)
    for (let index = 0; index < allListElements.length; index++) {
        const element = allListElements[index];
        console.log(element)
        element.remove()
    }
}