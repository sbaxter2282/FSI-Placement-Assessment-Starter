// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Steve Baxter" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gingerbreadQty = 0      // Gingerbread
let chocolateChipQty = 0      // Chocolate Chip
let sugarSprinkleQty = 0   // Sugar Sprinkle
let totalQty = 0


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!')

    gingerbreadQty = gingerbreadQty +1;
    document.getElementById('qty-gb').textContent = gingerbreadQty
   
    totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

    document.getElementById('qty-total').textContent = totalQty

    })
 

document.getElementById('minus-gb').addEventListener('click', function() {
     console.log('Gingerbread - button was clicked!')



gingerbreadQty = gingerbreadQty -1;
document.getElementById('qty-gb').textContent = gingerbreadQty

totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

document.getElementById('qty-total').textContent = totalQty


})


document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')

    chocolateChipQty = chocolateChipQty +1;
document.getElementById('qty-cc').textContent = chocolateChipQty

totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

document.getElementById('qty-total').textContent = totalQty

})


document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')

    chocolateChipQty = chocolateChipQty -1;
document.getElementById('qty-cc').textContent = chocolateChipQty

totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

document.getElementById('qty-total').textContent = totalQty

})


document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle Cookie + button was clicked!')

    sugarSprinkleQty = sugarSprinkleQty +1;
document.getElementById('qty-sugar').textContent = sugarSprinkleQty

totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

document.getElementById('qty-total').textContent = totalQty

})


document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle Cookie - button was clicked!')

    sugarSprinkleQty = sugarSprinkleQty -1;
document.getElementById('qty-sugar').textContent = sugarSprinkleQty

totalQty = gingerbreadQty+chocolateChipQty+sugarSprinkleQty

document.getElementById('qty-total').textContent = totalQty

})


