
var __name__ = "__main__";
var a, b;
a = 10;
b = 30;
function addition() {
    //console.log(document.innerHTML);
    document.getElementById("result").innerHTML = a + b;
}
chrome.runtime.getBackgroundPage((background)=>console.log("log"));
document.getElementById("computebutton").addEventListener("click", addition());
