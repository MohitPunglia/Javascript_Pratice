
const randomnumber = new Promise((resolve, reject) => {
    //async operation 
    setTimeout(() => {
        const randoValue = Math.random()
        if (randoValue > 0.5) {
            resolve(randoValue)
        } else {
            reject(new Error("value is too small"))
        }
    }, 2000)//delay by 2 sec

})

randomnumber.then(result => {
    console.log('values is fulfilled with value' + result)
}).catch(error => {
    console.log('Promise is rejected with error' + error)
})
