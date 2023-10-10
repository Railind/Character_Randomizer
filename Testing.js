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

        // Append the div to the grid container
        gridContainer.appendChild(newDiv);
        currentChars.push(selectedCharacter)
    }
});


//IT WORKS
