


const input = document.getElementById('inputbox')
const list = document.querySelector('#list-container')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a task')
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = '';
    saveData();

})

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

});


function saveData() {
    localStorage.setItem("data", list.innerHTML);

}
function showdata() {
    list.innerHTML = localStorage.getItem("data");
}
showdata(); 


