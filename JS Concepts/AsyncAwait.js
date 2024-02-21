const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise data")
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise data2")
    }, 5000)
})

async function getDataUsingAsyncAwait() {
    const data = await p1;
    console.log("data: ", data)
    console.log("Async Await 1")

    const data2 = await p2;
    console.log("data2: ", data2);
    console.log("Async Await 2")
}

function getDataUsingPromises() {
    p1.then((res) => console.log("res: ", res))
    console.log("promises, called first")

    p2.then((res) => console.log("res: ", res))
    console.log("promises, called second")
}

getDataUsingAsyncAwait();
getDataUsingPromises()