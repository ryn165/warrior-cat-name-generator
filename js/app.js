const catFirstName = {
    'A' : ['Apple', 'Arrow', 'Air'],
    'B' : ['Berry', 'Bear', 'Bramble'],
    'C' : ['Creek', 'Crow', 'Cloud'],
    'D' : ['Dawn', 'Dusk', 'Dove'],
    'E' : ['Eel', 'Elk', 'Echo'],
    'F' : ['Falcon', 'Fox', 'Forest'],
    'G' : ['Reed', 'Growl', 'Golden'],
    'H' : ['Hawk', 'Hoot', 'Hunt'],
    'I' : ['Branch', 'Sun', 'Moon'],
    'J' : ['Jay', 'Jewel', 'Juniper'],
    'K' : ['Kestrel', 'Kale', 'Larch'],
    'L' : ['Leaf', 'Lion', 'Leopard'],
    'M' : ['Mouse', 'Moor', 'Moose'],
    'N' : ['Newt', 'Night', 'Nut'],
    'O' : ['Black', 'Oak', 'Olive'],
    'P' : ['Pepper', 'Pike', 'Pine'],
    'Q' : ['Quail', 'Quill', 'Quince'],
    'R' : ['Raven', 'Raccoon', 'Rabbit'],
    'S' : ['Sleek', 'Snake', 'Sunset',],
    'T' : ['Tiger', 'Feather', 'Osprey'],
    'U' : ['Fox', 'Wolf', 'Flight'],
    'V' : ['Violet', 'Vine'],
    'W' : ['Wind', 'Wool', 'Wheat'],
    'X' : ['Birch', 'Spruce', 'Cypress'],
    'Y' : ['Yowl', 'Lake', 'Deer'],
    'Z' : ['Puddle', 'Thorn', 'Lichen'],
};

const catLastName = {
    'A' : ['leaf'],
    'B' : ['berry'],
    'C' : ['creek', 'cloud'],
    'D' : ['dusk'],
    'E' : ['echo'],
    'F' : ['moon', 'fish', 'feather'],
    'G' : ['spirit'],
    'H' : ['pelt'],
    'I' : ['fur'],
    'J' : ['tail'],
    'K' : ['eyes'],
    'L' : ['wings'],
    'M' : ['feather'],
    'N' : ['bird'],
    'O' : ['fang'],
    'P' : ['song'],
    'Q' : ['stripe'],
    'R' : ['tooth'],
    'S' : ['strike'],
    'T' : ['claw'],
    'U' : ['foot'],
    'V' : ['dapple'],
    'W' : ['whisker'],
    'X' : ['storm'],
    'Y' : ['whisper'],
    'Z' : ['tuft'],
};

const furColors = {
    'green' : 'Silver',
    'blue' : 'Black',
};

const eyeColors = {
    'yellow' : 'Amber',
    'red' : 'Green',
}

const generator = document.querySelector('form');

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalText = document.querySelector('#generated-output');

generator.addEventListener('submit', generate);

modalClose.addEventListener('click', function() {
    modal.classList.remove('is-active');
});

function generate(e) {
    e.preventDefault();

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let age = document.querySelector('#age').value;
    let favColor = document.querySelector('#fav-color').value;
    let leastFavColor = document.querySelector('#least-fav-color').value;

    let generatedCatFirstName = generateCatFirstName(firstName);
    let generatedCatLastName = generateCatLastName(lastName);
    let generatedCatGender = generateCatGender(age);
    let generatedFurColor = generateFurColor(favColor);
    let generatedEyeColor = generateEyeColor(leastFavColor);

    while (generatedCatFirstName.toLowerCase() == generatedCatLastName.toLowerCase()) {
        generatedCatLastName = generateCatLastName(lastName);
    }

    modalText.innerHTML =
    `Your warrior cat name is ${generatedCatFirstName}${generatedCatLastName}
     <br>Your gender is ${generatedCatGender}
     <br>Your fur color is ${generatedFurColor}
     <br>Your eye color is ${generatedEyeColor}`;

    modal.classList.add('is-active');

    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#fav-color').value = 'Select Favorite Color';
    document.querySelector('#least-fav-color').value = 'Select Least Favorite Color';

}

function generateCatFirstName(firstName) {
    const initial = firstName.substring(0, 1).toUpperCase();

    return catFirstName[initial][Math.floor(Math.random() * catFirstName[initial].length)];
}

function generateCatLastName(lastName) {
    const initial = lastName.substring(0, 1).toUpperCase();

    return catLastName[initial][Math.floor(Math.random() * catLastName[initial].length)];
}

function generateCatGender(age) {
    if (age % 2 == 0) {
        return 'Female';
    }

    return 'Male';
}

function generateFurColor(favColor) {
    return furColors[favColor.toLowerCase()];
}

function generateEyeColor(leastFavColor) {
    return eyeColors[leastFavColor.toLowerCase()];
}
