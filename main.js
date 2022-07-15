//Bài 1:
function result() {
    let a = document.getElementById('number1').value
    let sum = 1
    for (let i = 1; i <= a; i++) {
        sum *= i
    }
    document.getElementById('result').innerHTML = sum
}
// Bài2
let count = 1;
let j = 1;
while (count <= 15) {
    if (j % 3 === 0) {
        document.getElementById('result2').innerHTML += j + '<br>'
        count ++

    }
    j++

}
// Bài 3:
function result3() {
    let n = Number(document.getElementById('number3').value);
    let sum3 = 0;
    for (let i = 1; i <= n ; i++) {
        sum3 += 1/i
    }
    document.getElementById('result3').innerHTML = 'Sum = ' + sum3.toFixed(5)
}
// Bài 4
function result4() {
    let b = document.getElementById('input4').value;
    for (let i = 1; i <= b ; i++) {
        document.getElementById('result4').innerHTML += '<br>' + i
    }
}