function g() {
    let a = document.getElementById("a").value
let b = document.getElementById("b").value
let x = document.getElementById("x")
if (a>b) {
    x.value = a-b
}
if (b>a) {
    x.value = b-a
}
}