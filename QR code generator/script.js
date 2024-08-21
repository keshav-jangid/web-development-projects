const qrimage = document.getElementById("qrimage");
const qrbox = document.querySelector(".qr-box");
const box = document.querySelector(".box");
const inputvalue = document.getElementById("input");
const button = document.getElementById("btn");
const inputdiv = document.querySelector(".inputdiv");
let p = document.createElement("p");
p.innerHTML = "enter valid text to generate QR code";

button.addEventListener("click", () => {
  if (inputvalue.value === "") {
    box.appendChild(p);
  } else {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputvalue.value;
    qrbox.style.display = "flex";
  }
});

inputvalue.addEventListener("click", () => {
  if (box.contains(p)) {
    box.removeChild(p);
  }
});
inputvalue.addEventListener("input", () => {
  if (inputvalue.value == "") {
    qrbox.style.display = "none";
  }
});
inputdiv.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    inputvalue.value = "";
    qrbox.style.display = "none";
  }
});
