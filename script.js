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
        // let incompleteArrayOfToDos = arrayOfToDos.filter(todo => !todo.completed)
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



const removeElements = () => {
    const allListElements = document.querySelectorAll("li")
    console.log(allListElements)
    for (let index = 0; index < allListElements.length; index++) {
        const element = allListElements[index];
        console.log(element)
        element.remove()
    }
}