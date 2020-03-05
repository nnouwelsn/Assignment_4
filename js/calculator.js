let $ = function (id) {
    return window.document.getElementById(id);
}
let display;
let enter = (val) => {
    val = val.target.value;
    display = $('result').value += val;
    return display;
}

let calculate = () => {
    let output = eval(display);
    $('result').value = output;
}

window.addEventListener('load', () => {
    $('calculator').addEventListener('click', enter);
    console.log('page loaded');
    $('equal').addEventListener('click', calculate);
});
