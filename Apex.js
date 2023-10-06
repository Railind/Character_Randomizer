let legends = ['Pathfinder', 'Valkyrie', 'Wattson', 'Ballistic', 'Ashe', 'Vantage']


function LegendRandomizer() {
    return legends[Math.floor(Math.random() * legends.length)]
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

addChatacter = document.getElementById('AddCharacter')
legendGrid = document.getElementById('legendGrid')

addCharacter.addEventListener('change', function () {


})

LegendPicker();
