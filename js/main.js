const catFirstName = {
    'A' : 'Apple',
    'B' : 'Berry',
    'C' : 'Creek',
    'D' : 'Dawn',
    'E' : 'Eel',
    'F' : 'Falcon',
    'G' : 'Reed',
    'H' : 'Hawk',
    'I' : 'Branch',
    'J' : 'Jay',
    'K' : 'Kestrel',
    'L' : 'Leaf',
    'M' : 'Mouse',
    'N' : 'Newt',
    'O' : 'Black',
    'P' : 'Pepper',
    'Q' : 'Quail',
    'R' : 'Raven',
    'S' : 'Sleek',
    'T' : 'Tiger',
    'U' : 'Fox',
    'V' : 'Violet',
    'W' : 'Wind',
    'X' : 'Birch',
    'Y' : 'Yowl',
    'Z' : 'Puddle',

};

const catLastName = {
    'A' : 'leaf',
    'B' : 'berry',
    'C' : 'cloud',
    'D' : 'dusk',
    'E' : 'echo',
    'F' : 'moon',
    'G' : 'spirit',
    'H' : 'pelt',
    'I' : 'fur',
    'J' : 'tail',
    'K' : 'eyes',
    'L' : 'wings',
    'M' : 'feather',
    'N' : 'bird',
    'O' : 'fang',
    'P' : 'song',
    'Q' : 'stripe',
    'R' : 'tooth',
    'S' : 'strike',
    'T' : 'claw',
    'U' : 'foot',
    'V' : 'dapple',
    'W' : 'whisker',
    'X' : 'storm',
    'Y' : 'whisper',
    'Z' : 'tuft',

};

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

    const firstInitial = firstName.substring(0, 1).toUpperCase();
    const lastInitial = lastName.substring(0, 1).toUpperCase();

    modalText.innerHTML = 'Your warrior cat name is ' + catFirstName[firstInitial] + catLastName[lastInitial];

    modal.classList.add('is-active');

    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
}
