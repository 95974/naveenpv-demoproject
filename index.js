document.getElementById('para').style.color = 'red'

var userName = 'Naveen pv'
var userNumber = 1
console.log(userNumber)
console.log(userName)
console.log('Hello')


console.log('outter function')
function firstFun() {
    // document.getElementById('para').innerHTML = "Naveen pv"
    console.log('Inner function')
    // console.log(document.getElementById('para').innerHTML);
    console.log(document.getElementById('para').innerText)
    console.log(document.getElementById('para').textContent)

}
console.log('middle')

// firstFun()


var arrowFun = (xValue, yValue) => {
    console.log(xValue)
    console.log(yValue);
    console.log('arrow function')
}
arrowFun(10, 30)

function showHide(value) {
    console.log(value);

    document.getElementById('userName').style.display = value
}

function colorChange(value) {
    document.getElementById('userName').style.color = value
}