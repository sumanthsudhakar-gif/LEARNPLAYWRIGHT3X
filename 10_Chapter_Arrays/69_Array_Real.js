let browser = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
console.log(browser[0]); // Chrome
console.log(browser[1]); // Firefox
console.log(browser[2]);
console.log(browser.length);

browser.pop();
console.log(browser); // ["Chrome", "Firefox", "Safari", "Edge"]

let removed = browser.shift();
console.log(browser); // ["Firefox", "Safari", "Edge"]
console.log(removed); // "Chrome"

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "Opera") {
        console.log("Opera doesn't support Automation Now!");
    }   
}
