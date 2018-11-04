function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}

var __name__ = "__main__";
var a, b;
a = 10;
b = 30;
function addition() {
    ՐՏ_print(document.innerHTML);
    document.getElementById("result").innerHTML = a + b;
}
document.getElementById("computebutton").addEventListener("click", addition());
