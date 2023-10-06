// Get references to the dropdown and grid container
const characterDropdown = document.getElementById('characterDropdown');
console.log(characterDropdown)
const gridContainer = document.getElementById('gridContainer');

// Add an event listener to the dropdown to trigger when a character is selected
characterDropdown.addEventListener('change', function () {
    const selectedCharacter = characterDropdown.value;

    console.log('SELECTED CHARACTER', selectedCharacter)

    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = `${selectedCharacter}`; // Add a class if needed

    console.log('NEW DIV', newDiv.className)

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = `images/${selectedCharacter}.png`; // Set the image source
    console.log('IMAGE', newImage.src)
    // Append the image to the div
    newDiv.appendChild(newImage);

    // Append the div to the grid container
    gridContainer.appendChild(newDiv);
});


//IT WORKS
