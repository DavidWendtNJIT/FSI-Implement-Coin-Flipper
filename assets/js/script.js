// Variables

// Outcome of flip
// Number of Heads 
// Number of Tails
// Total number of flips
// Percentage of heads
// Percentage of tails
// Flip Button
// Clear Button
// Image
// Status Message


// Process

// Show Image for Heads
// Show Image for Tails
// querySelector to select Flip button
// querySelector to select Clear button
// querySelector to select Image
// querySelector to select Status Message


// Event Listeners

// On Hover for "flip the penny"
// On Hover for "clear scoreboard"
// On Click for "flip the penny"
// On Click for "clear scoreboard"


// Initial State

// Create image
// Starting Coin Image = Heads
// Message = "Let's Get Rolling!"
// Create message area
// Create 'flip the penny" button
// Create 'clear scoreboard' button


// On the flip

// Randomly generate heads or tails
// Message is set
// 'Number of Heads' is set
// 'Number of Tailes' is set
// 'Percentage Heads' is set
// 'Percentage Tails' is set


// On the Clear




    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)







// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0


document.addEventListener('DOMContentLoaded', function () {

//Flip Button    
document.getElementById('flip').addEventListener('click', () =>{

    let flippedHeads = Math.random() > 0.5

    if (flippedHeads) {
        document.getElementById('penny-image').src='assets/images/penny-heads.jpg'
        document.getElementById('message').innerText='You Flipped Heads'
        totalHeads ++
        console.log ('Heads')
    }
    else {
        document.getElementById('penny-image').src='assets/images/penny-tails.jpg'
        document.getElementById('message').innerText='You Flipped Tails'
        totalTails ++
        console.log ('Tails')
    }

    let flipTotal = totalHeads + totalTails

    let percHeads = 0
    let percTails = 0

    if (flipTotal > 0)  {
        percHeads = Math.round((totalHeads / flipTotal) * 100)
        percTails = Math.round((totalTails / flipTotal) * 100)
    }

    document.getElementById('heads').innerText = totalHeads
    document.getElementById('heads-percent').innerText = percHeads + '%'
    document.getElementById('tails').innerText = totalTails
    document.getElementById('tails-percent').innerText = percTails + '%'
})


//Clear Button
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('message').innerText='Give it Another Try!'

    totalHeads = 0
    totalTails = 0

    let flipTotal = totalHeads + totalTails

    let percHeads = 0
    let percTails = 0

    if (flipTotal > 0)  {
        percHeads = Math.round((totalHeads / flipTotal) * 100)
        percTails = Math.round((totalTails / flipTotal) * 100)
    }

    document.getElementById('heads').innerText = totalHeads
    document.getElementById('heads-percent').innerText = percHeads + '%'
    document.getElementById('tails').innerText = totalTails
    document.getElementById('tails-percent').innerText = percTails + '%'

})
})