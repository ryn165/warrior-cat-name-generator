const catFirstName = {
    'A' : 'Apple',
    'B' : 'Berry',
    'C' : 'Creek',
    'D' : 'Dawn',
    'J' : 'Jay',
    'K' : 'Killer'
};

const catLastName = {
    'F' : 'Fluffy',
    'V' : 'Victory'
};

const generator = document.querySelector('form');

generator.addEventListener('submit', generate);

function generate(e) {
    e.preventDefault();

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;

    const firstInitial = firstName.substring(0, 1).toUpperCase();
    const lastInitial = lastName.substring(0, 1).toUpperCase();

    alert('Your warrior cat name is ' + catFirstName[firstInitial] + ' ' + catLastName[lastInitial]);

    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
}