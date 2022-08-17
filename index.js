let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0
function increment() {
    count += 1
    countEl.textContent = count
    total += 1
    totalEl.textContent = "Total: " + total + " cups"
}
let saves = 0
function save() {
    if (saves < 1)
        saveEl.textContent += count
    else 
        saveEl.textContent += " - " + count
    saves += 1
    countEl.textContent = 0
    count = 0
}