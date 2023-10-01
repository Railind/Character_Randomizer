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
        message = 'Woohoo friends, time to swoop in with Pathfinder!'
    }
    if (chosen === 'Valkyrie') {
        message = 'Ladies and gentlmen this is your Captain speaking, time to own the skys with Valkyrie'
    }
    if (chosen === 'Wattson') {
        message = "I'm Wattson and I am ecstatic to be joining the fight!"
    }
    if (chosen === 'Ballistic') {
        message = "Let Ballistic show you how a real legend fights."
    }
    if (chosen === 'Ashe') {
        message = "I'm Ashe and I'll make you go woof woof bark bark."
    }
    if (chosen === 'Vantage') {
        message = "Vantage is getting a new angle at Echoe's location, ECHOLOCATION, GET IT???"
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
