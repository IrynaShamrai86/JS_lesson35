// traffic-light

const startBtnElem = document.getElementById('startButton');

startBtnElem.addEventListener('click', () => {
    colorToggle();
});
let activeElem = null;
function colorToggle() {
    const wrap = document.getElementById('trafficLightWrap');
    const childrenLength = wrap.children.length;

    if (activeElem === childrenLength) {
        wrap.children[childrenLength - 1].classList.remove('bulb-active-green');
        wrap.children[0].classList.add('bulb-active-red');

        activeElem = 1;
    } else if (activeElem) {
        wrap.children[activeElem - 1].classList.remove('bulb-active-red');
        wrap.children[activeElem].classList.add('bulb-active-yellow');

        activeElem = activeElem + 1;
    } else {
        wrap.children[0].classList.add('bulb-active-red');

        activeElem = 1;
    }
}



// playlist

function toDoList() {
    let author = document.getElementById("author").value
    let song = document.getElementById("song").value

    let listItem = document.createTextNode(`author: ${author}; song: ${song}`)

    let newListItem = document.createElement("li")

    newListItem.appendChild(listItem)

    const listElement = document.getElementById('listElement');

    listElement.appendChild(newListItem)
}



// modal-window

function pop() {
    document.querySelector(".js-modal-entrance").classList.toggle('modal-window-open');
}