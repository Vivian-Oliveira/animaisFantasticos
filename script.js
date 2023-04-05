const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lightBulb = document.getElementById('light');

const lightOn = () => {
    light.src = './img/ligada.jpg'
};

const lightOff = () => {
    light.src = './img/desligada.jpg'
};

const lightBroken = () => {
    light.src = "./img/quebrada.jpg"
}
turnOn.addEventListener("click", lightOn);
turnOff.addEventListener("click", lightOff);
light.addEventListener("mouseover", lightOn)
light.addEventListener("mouseleave", lightOff)
light.addEventListener("dblclick", lightBroken)