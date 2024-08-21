const box = document.querySelector(".display");
const userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];

let age = document.getElementById("age");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let birthdate = new Date(userinput.value);
  console.log(birthdate);

  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth();
  let y1 = birthdate.getFullYear();
});
