const catFirstName = {
    'A' : ['Apple', 'Arrow', 'Ash'],
    'B' : ['Berry', 'Bear', 'Bramble'],
    'C' : ['Creek', 'Vixen', 'Cloud'],
    'D' : ['Dawn', 'Dusk', 'Dove'],
    'E' : ['Eel', 'Elk', 'Echo'],
    'F' : ['Falcon', 'Fox', 'Forest'],
    'G' : ['Goose', 'Growl', 'Golden'],
    'H' : ['Hawk', 'Howl', 'Hunt'],
    'I' : ['Ice', 'Sun', 'Ivy'],
    'J' : ['Jay', 'Jagged', 'Juniper'],
    'K' : ['Kestrel', 'Kale', 'Kink'],
    'L' : ['Leaf', 'Lion', 'Leopard'],
    'M' : ['Mouse', 'Mouse', 'Moss'],
    'N' : ['Newt', 'Night', 'Nut'],
    'O' : ['Black', 'Oak', 'Olive'],
    'P' : ['Pepper', 'Pebble', 'Pine'],
    'Q' : ['Quail', 'Quill', 'Quince'],
    'R' : ['Raven', 'Raccoon', 'Rabbit'],
    'S' : ['Sleek', 'Snake', 'Sunset',],
    'T' : ['Tiger', 'Thrush', 'Thistle'],
    'U' : ['Shrew', 'Wolf', 'Flight'],
    'V' : ['Violet', 'Vine', 'Crow'],
    'W' : ['Wind', 'Weasel', 'Wheat'],
    'X' : ['Birch', 'Spruce', 'Cypress'],
    'Y' : ['Yowl', 'Yarrow', 'Deer'],
    'Z' : ['Puddle', 'Thorn', 'Lichen'],
};

const catLastName = {
    'A' : ['stream', 'leaf', 'soar'],
    'B' : ['berry', 'fire', 'heart'],
    'C' : ['blaze', 'cloud', 'talons'],
    'D' : ['dusk', 'dawn', 'mist'],
    'E' : ['echo', 'leap', 'petal'],
    'F' : ['moon', 'frost', 'feather'],
    'G' : ['spirit', 'pounce', 'shine'],
    'H' : ['pelt', 'shade', 'sting'],
    'I' : ['fur', 'step', 'nose'],
    'J' : ['tail', 'jaw', 'breeze'],
    'K' : ['eyes', 'bark', 'fall'],
    'L' : ['wings', 'swift', 'runner'],
    'M' : ['feather', 'stalk', 'sky'],
    'N' : ['bird', 'light', 'flame'],
    'O' : ['fang', 'fish', 'belly'],
    'P' : ['song', 'step', 'Ears'],
    'Q' : ['splash', 'swoop', 'catcher'],
    'R' : ['tooth', 'legs', 'toe'],
    'S' : ['strike', 'flower', 'dark'],
    'T' : ['claw', 'rain', 'spike'],
    'U' : ['foot', 'face', 'beak'],
    'V' : ['mask', 'watcher', 'stone'],
    'W' : ['whisker', 'water', 'wish'],
    'X' : ['storm', 'moss', 'fade'],
    'Y' : ['whisper', 'scar', 'thorn'],
    'Z' : ['tuft', 'arrow', 'growl'],
};

const furColors = {
    'red' : 'Golden',
    'orange' : 'Brown',
    'yellow' : 'White',
    'green' : 'Silver',
    'blue' : 'Grey',
    'purple' : 'Auburn'
    'black' : 'Black',
    'brown' : 'Ginger',
    'white' : 'Tawny',
    'pink' : 'Calico/Tortoiseshell',
};

const eyeColors = {
    'red' : 'Green',
    'orange' : 'Amber',
    'yellow' : 'Redish',
    'green' : 'Yellow',
    'blue' : 'Hazel',
    'purple' : 'Lime',
    'black' : 'Orange',
    'brown' : 'Mossy Colored',
    'white' : 'Cream',
    'pink' : 'Blue',
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
