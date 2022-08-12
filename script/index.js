let number;
document.querySelector("#submit").disabled = true;

document.querySelector(".one").addEventListener("input", () => {
    number = 1;
    document.querySelector(".select").textContent = number;
    document.querySelector("#submit").disabled = false;
});

document.querySelector(".two").addEventListener("input", () => {
    number = 2;
    document.querySelector(".select").textContent = number;
    document.querySelector("#submit").disabled = false;
});

document.querySelector(".three").addEventListener("input", () => {
    number = 3;
    document.querySelector(".select").textContent = number;
    document.querySelector("#submit").disabled = false;
});

document.querySelector(".four").addEventListener("input", () => {
    number = 4;
    document.querySelector(".select").textContent = number;
    document.querySelector("#submit").disabled = false;
});

document.querySelector(".five").addEventListener("input", () => {
    number = 5;
    document.querySelector(".select").textContent = number;
    document.querySelector("#submit").disabled = false;
});


document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".start--container").style.display = "none";
    document.querySelector(".end--container").style.display = "flex";
});