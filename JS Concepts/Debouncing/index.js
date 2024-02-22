
let timer;
var counter = 0;
const getData = () => {
    console.log("data is calling", counter++)
}

const debouncing = function () {

    clearTimeout(timer);
    timer = setTimeout(() => {
        getData();
    }, 300)
}