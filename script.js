// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfToDos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

console.log(arrayOfToDos[0].userId) // => 14
console.log(arrayOfToDos[1].userId) // => 20

const fetchToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/ToDos')
    .then( (response) => response.json())
    .then( (json) => arrayOfToDos = json)
    console.log("fetch in progress")
}

const logToDos = () => {
    console.log(arrayOfToDos)
}

const populateToDos = () => {
    const setToDo = document.getElementById("todo-list")
    for (let index = 0; index < arrayOfToDos.length; index++) {
        console.log(index)
        const listItem = document.getElementById("li")
        const text = document.createTextNode(arrayOfToDos[index].userId);
            console.log(arrayOfToDos[index].userId)
        listItem.appendChild(text)
        setToDo.appendChild(listItem)
    }
}

const filterArrayOfToDos = (filterBy) => {
  console.log(filterBy)
    const userNumber = document.getElementById("numUser").value
    console.log("userNumber")
    if (filterBy === "userId") {
        arrayOfToDos = arrayOfToDos.filter(todo => todo.userId == userNumber)
    }
    if (filterBy === "completed") {
        arrayOfToDos = arrayOfToDos.filter(todo => !todo.completed)
    }
    console.log(arrayOfToDos)
  removeElements()
  populateElements()
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