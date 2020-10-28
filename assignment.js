//solve task 1
const sayHello1 = name => console.log('Hi ' + name);
sayHello1('Charles Warden');

//solve task 2
const sayHello2 = (greet, name) => console.log(greet + ' ' + name);
sayHello2('Hello', 'Charles Warden');

//task 2a
const sayHello2a = () => console.log('How are you, Charles?');
sayHello2a();

//task 2b
const sayHello2b = name => "What's up! " + name;
console.log(sayHello2b("Charles"));

//task 3
const sayHello3 = (name, greet) => {
    console.log((greet || 'Gracias') + ' ' + name);
};
sayHello3('Charles Warden');
sayHello3('Charles', 'Good morning');

//task 4 => no display for empty string or number input
const checkInput = (check, ...texts) => {
    let invalidInput = false;
    for (const text of texts) {
        if (!text || !isNaN(text)) {
            invalidInput = true;
            break;
        }
    }
    if (!invalidInput) {
        check();
    }
};
checkInput(() => console.log('No empty string or number input'), 'Hi', 'Max', 'Charles');