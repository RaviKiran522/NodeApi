const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise data")
    }, 2000)
})

async function getData() {
    const data = await p1;
    console.log("data: ", data)
}

getData()