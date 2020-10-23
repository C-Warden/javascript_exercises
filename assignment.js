const task3Element = document.getElementById('task-3');

function inform() {
    alert('This is my second assignment/commit');
}

function greetUser(name) {
    alert(`Have a nice day ${name}`);
}

inform();
greetUser('Sharaf and Gordon');

task3Element.addEventListener('click', inform);

function combine(name1, name2, name3) {
    let result = name1 + ' ' + name2 + ' ' + name3;
    return result;
}

let combineText = combine('Hi', 'Uncle', 'Fi');

alert(combineText);