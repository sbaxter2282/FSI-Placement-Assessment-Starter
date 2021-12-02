// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Steve Baxter" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!')
    })


let gingerbreadQtyCell = document.querySelector("#qty-gb");
let gingerbreadQty = localStorage.getItem('gingerbreadQty')
if (gingerbreadQty) {
    gingerbreadQtyCell.textContent = gingerbreadQty;
}

 
document.getElementById('add-gb').addEventListener('click', function(e) {
    let gingerbreadQtyCount = parseInt(gingerbreadQtyCell.textContent);
    gingerbreadQtyCount = gingerbreadQtyCount + 1;
    gingerbreadQtyCell.textContent = gingerbreadQtyCount;
    localStorage.setItem('qty-gb', gingerbreadQty);
});


document.getElementById('minus-gb').addEventListener('click', function() {
     console.log('Gingerbread - button was clicked!')
})

 
document.getElementById('minus-gb').addEventListener('click', function(e) {
    let gingerbreadQtyCount = parseInt(gingerbreadQtyCell.textContent);
    gingerbreadQtyCount = gingerbreadQtyCount - 1;
    gingerbreadQtyCell.textContent = gingerbreadQtyCount;
    localStorage.setItem('qty-gb', gingerbreadQty);
});


document.getElementById('add-cc').addEventListener('click', function() {
        console.log('Chocolate Chip + button was clicked!')
  })


let chocolateChipQtyCell = document.querySelector("#qty-cc");
let chocolateChipQty = localStorage.getItem('chocolateChipQty')
if (chocolateChipQty) {
    chocolateChipQtyCell.textContent = chocolateChipQty;
}

 
document.getElementById('add-cc').addEventListener('click', function(e) {
    let chocolateChipQtyCount = parseInt(chocolateChipQtyCell.textContent);
    chocolateChipQtyCount = chocolateChipQtyCount + 1;
    chocolateChipQtyCell.textContent = chocolateChipQtyCount;
    localStorage.setItem('qty-cc', chocolateChipQty);
});


document.getElementById('minus-cc').addEventListener('click', function() {
        console.log('Chocolate Chip - button was clicked!')
})


document.getElementById('minus-cc').addEventListener('click', function(e) {
    let chocolateChipQtyCount = parseInt(chocolateChipQtyCell.textContent);
    chocolateChipQtyCount = chocolateChipQtyCount - 1;
    chocolateChipQtyCell.textContent = chocolateChipQtyCount;
    localStorage.setItem('qty-cc', chocolateChipQty);
});


document.getElementById('add-sugar').addEventListener('click', function() {
       console.log('Sugar Sprinkle + button was clicked!')
})


let sugarSprinkleQtyCell = document.querySelector("#qty-sugar");
let sugarSprinkleQty = localStorage.getItem('sugarSprinkleQty')
if (sugarSprinkleQty) {
    sugarSprinkleQtyCell.textContent = sugarSprinkleQty;
}

 
document.getElementById('add-sugar').addEventListener('click', function(e) {
    let sugarSprinkleQtyCount = parseInt(sugarSprinkleQtyCell.textContent);
    sugarSprinkleQtyCount = sugarSprinkleQtyCount + 1;
    sugarSprinkleQtyCell.textContent = sugarSprinkleQtyCount;
    localStorage.setItem('qty-sugar', sugarSprinkleQty);
});


document.getElementById('minus-sugar').addEventListener('click', function() {
       console.log('Sugar Sprinkle - button was clicked!')
})


document.getElementById('minus-sugar').addEventListener('click', function(e) {
    let sugarSprinkleQtyCount = parseInt(sugarSprinkleQtyCell.textContent);
    sugarSprinkleQtyCount = sugarSprinkleQtyCount - 1;
    sugarSprinkleQtyCell.textContent = sugarSprinkleQtyCount;
    localStorage.setItem('qty-sugar', sugarSprinkleQty);
});


let summary = document.querySelectorAll(".summary")
console.log(summary)






