/*Themes */

const container = document.querySelector(".container");
const themes = Array.from(document.querySelectorAll("span"));
const theme = document.querySelector("#theme-link");
themes.map((e) => {
    e.addEventListener("click", () => {
        themes.map((o) => {
            o.style.backgroundColor = "transparent";
        })
        if (e.className == "red") {
            e.style.cssText = "background-color: var(--t1-red);"
            theme.href = "css/theme1.css"
        } else if (e.className == "orange") {
            e.style.cssText = "background-color: var(--t2-orange);"
            theme.href = "css/theme2.css"
        } else if (e.className == "aqua") {
            e.style.cssText = " background-color: var(--t3-cyan);"
            theme.href = "css/theme3.css"
        }
    })
})

/*Calc*/

let previous;
let current;
let operation;
const buttons = Array.from(document.querySelectorAll(".row div"));
let screen = document.querySelector(".screen");
buttons.map((e) => {
    e.addEventListener("click", () => {
        if (e.className == "number") {
            screen.innerHTML += e.innerHTML;
            current += e.innerHTML;
        } else if (e.className == "operation") {
            operation = e.innerHTML;
            previous = screen.innerHTML;
            screen.innerHTML = "";
            current = "";
        } else if (e.className == "equal") {
            equal();
        } else if (e.className == "reset") {
            reset();
        } else if (e.className == "del") {
            screen.innerHTML = screen.innerHTML.toString().slice(0, -1);
            current.length -= 1;
        }
    })
})
function equal() {
    let result;
    if (operation == "+") {
        result = parseFloat(previous) + parseFloat(current);
    } else if (operation == "-") {
        result = parseFloat(previous) - parseFloat(current);
    } else if (operation == "/") {
        result = parseFloat(previous) / parseFloat(current);
    } else if (operation == "X") {
        result = parseFloat(previous) * parseFloat(current);
    }
    screen.innerHTML = result;
}
function reset() {
    previous = "";
    current = "";
    operation = "";
    screen.innerHTML = ""
}