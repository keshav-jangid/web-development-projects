const passwordbox = document.getElementById('password');
const btn = document.getElementById('btn')

const copyicon = document.getElementById('copyicon')

const length = 12
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()<>?/\|{}[+=]"

function randompassword() {
    let password = ''
    const allchars = uppercase + lowercase + numbers + symbols
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }

    passwordbox.value = password

}

randompassword()

btn.addEventListener('click', function () {
    randompassword()
})

copyicon.addEventListener('click', () => {
    passwordbox.select()
    navigator.clipboard.writeText(passwordbox.value)
})

