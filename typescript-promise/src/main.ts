let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if(money >= 10000){
                resolve("mua duoc" + car);
            } else {
                reject("het tien deo mua duoc" + "" + car);
            }
        },1000);
    }))
}
money = 20000;
const promise = buyACar("vinfast").then(value => {
    console.log(value);
},error => {
    console.log(error)
})

let money2 = 5000;
const buyACar2 = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if(money2 >= 10000){
                resolve("mua duoc" + car);
            } else {
                reject("het tien deo mua duoc" + "" + car);
            }
        },1000);
    }))
}
const promise2 = buyACar2("xe dap").then(value => {
    console.log(value)
},onerror => {
    console.log(onerror)
})