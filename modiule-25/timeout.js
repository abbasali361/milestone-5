function doSomething(){
    console.log(333);
}
console.log(222);
// setTimeout(doSomething, 10000);
// setTimeout(function(){
//     console.log('lazy and waiting')
// },4000)
// setTimeout(() => {
//     console.log('see you later')
// },5000)
setInterval(function(){
    console.log('doing it again')
},3000)
console.log(444);
console.log(444);
console.log(444);