
let timer;
var counter = 0;
const getData = () => {
    console.log("data is calling", counter++)
}

//Akshay code

const throttle = function (fn, time) {
    let flag = true
    return function () {
        if (flag) {
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, time)
        }
    }
}

const betterThrottling = throttle(getData, 300)