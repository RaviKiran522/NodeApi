
let timer;
var counter = 0;
const getData = () => {
    console.log("data is calling", counter++)
}

//my code
const debouncing = function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
        getData();
    }, 300)
}

//Akshay code

const debounce = function (fn, time) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData();
        }, 300)
    }
}

const betterDebouncing = debounce(getData, 300)