// Get references to the dropdown and grid container
const characterDropdown = document.getElementById('characterDropdown');
console.log(characterDropdown)
const gridContainer = document.getElementById('gridContainer');
let currentChars = []




// Add an event listener to the dropdown to trigger when a character is selected
characterDropdown.addEventListener('change', function () {
    const selectedCharacter = characterDropdown.value;

    console.log('SELECTED CHARACTER', selectedCharacter)
    console.log(gridContainer)

    // Create a new div element
    if (!currentChars.includes(selectedCharacter)) {
        const newDiv = document.createElement('div');
        newDiv.id = `${selectedCharacter}`;
        newDiv.style.maxHeight = "100px"// Add a class if needed



        console.log('NEW DIV', newDiv.className)

        // Create a new image element
        const newImage = document.createElement('img');
        newImage.src = `images/${selectedCharacter}.png`;
        newImage.style.maxHeight = "100px"
        newImage.style.maxWidth = "100px" // Set the image source
        console.log('IMAGE', newImage.src)
        // Append the image to the div
        newDiv.appendChild(newImage);

        //Creating our remove button
        const remove = document.createElement('button')
        remove.innerText = "X"
        remove.style.background = "none"
        remove.style.borderRadius = "5px"
        remove.style.border = "grey 1px solid"
        remove.style.opacity = "0%"
        //Event listener that does the removing
        remove.addEventListener("click", () => {
            newDiv.remove()
            currentChars.splice(currentChars.indexOf(selectedCharacter), 1)
        })
        //Listeners for the sake of style
        newDiv.addEventListener("mouseenter", () => {
            remove.style.opacity = "100%"
            newDiv.style.boxShadow = "2px 2px black"
        })
        newDiv.addEventListener("mouseleave", () => {
            remove.style.opacity = "0%"
            newDiv.style.boxShadow = ""
        })

        newDiv.appendChild(remove)

        // Append the div to the grid container
        gridContainer.appendChild(newDiv);
        currentChars.push(selectedCharacter)
        // localStorage.setItem()
    }






});

function LegendRandomizer() {
    return currentChars[Math.floor(Math.random() * currentChars.length)]
}

function LegendPicker() {
    let message;
    let chosen = LegendRandomizer()
    console.log(chosen)

    let imagePath = `images/${chosen.toLowerCase()}.png`; // Construct the image path
    let legendImage = `<img src="${imagePath}" alt="${chosen}">`; // Create an img element with the legend image


    if (chosen === 'Pathfinder') {
        message = 'Pathy Message'
    }
    if (chosen === 'Valkyrie') {
        message = 'Valk Message'
    }
    if (chosen === 'Wattson') {
        message = "Watty Message"
    }
    if (chosen === 'Ballistic') {
        message = "Bally Message"
    }
    if (chosen === 'Ashe') {
        message = "Ashy Message"
    }
    if (chosen === 'Vantage') {
        message = "Vanty Message"
    }
    console.log(message);

    document.getElementById("legendMessage").innerHTML = message;
    document.getElementById("legendImage").innerHTML = legendImage;
}


//IT WORKS
