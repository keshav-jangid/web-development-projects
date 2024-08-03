
const createbtn = document.querySelector('.createbtn');
const createnotes = document.querySelector('.createnotes');
const notes = document.querySelector('.inputbox')

createbtn.addEventListener('click', function () {

    let inputbox = document.createElement("p")
    let img = document.createElement("img")
    img.src = "delete-icon.png"
    inputbox.setAttribute("contenteditable", "true")
    inputbox.className = "inputbox"


    createnotes.appendChild(inputbox).appendChild(img)

})
createnotes.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove()


    }
})
