/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var catFirstName = {
    'A': ['Apple'],
    'B': ['Berry'],
    'C': ['Creek'],
    'D': ['Dawn'],
    'E': ['Eel'],
    'F': ['Falcon'],
    'G': ['Reed'],
    'H': ['Hawk'],
    'I': ['Branch'],
    'J': ['Jay', 'Jewel', 'Jelly'],
    'K': ['Kestrel'],
    'L': ['Leaf'],
    'M': ['Mouse'],
    'N': ['Newt'],
    'O': ['Black'],
    'P': ['Pepper'],
    'Q': ['Quail'],
    'R': ['Raven'],
    'S': ['Sleek'],
    'T': ['Tiger'],
    'U': ['Fox'],
    'V': ['Violet'],
    'W': ['Wind'],
    'X': ['Birch'],
    'Y': ['Yowl'],
    'Z': ['Puddle']
};

var catLastName = {
    'A': ['leaf'],
    'B': ['berry'],
    'C': ['creek', 'cloud'],
    'D': ['dusk'],
    'E': ['echo'],
    'F': ['moon', 'fish', 'fin'],
    'G': ['spirit'],
    'H': ['pelt'],
    'I': ['fur'],
    'J': ['tail'],
    'K': ['eyes'],
    'L': ['wings'],
    'M': ['feather'],
    'N': ['bird'],
    'O': ['fang'],
    'P': ['song'],
    'Q': ['stripe'],
    'R': ['tooth'],
    'S': ['strike'],
    'T': ['claw'],
    'U': ['foot'],
    'V': ['dapple'],
    'W': ['whisker'],
    'X': ['storm'],
    'Y': ['whisper'],
    'Z': ['tuft']
};

var furColors = {
    'green': 'Silver',
    'blue': 'Black'
};

var eyeColors = {
    'yellow': 'Amber',
    'red': 'Green'
};

var generator = document.querySelector('form');

var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');
var modalText = document.querySelector('#generated-output');

generator.addEventListener('submit', generate);

modalClose.addEventListener('click', function () {
    modal.classList.remove('is-active');
});

function generate(e) {
    e.preventDefault();

    var firstName = document.querySelector('#first-name').value;
    var lastName = document.querySelector('#last-name').value;
    var age = document.querySelector('#age').value;
    var favColor = document.querySelector('#fav-color').value;
    var leastFavColor = document.querySelector('#least-fav-color').value;

    var generatedCatFirstName = generateCatFirstName(firstName);
    var generatedCatLastName = generateCatLastName(lastName);
    var generatedCatGender = generateCatGender(age);
    var generatedFurColor = generateFurColor(favColor);
    var generatedEyeColor = generateEyeColor(leastFavColor);

    while (generatedCatFirstName.toLowerCase() == generatedCatLastName.toLowerCase()) {
        generatedCatLastName = generateCatLastName(lastName);
    }

    modalText.innerHTML = 'Your warrior cat name is ' + generatedCatFirstName + generatedCatLastName + '\n     <br>Your gender is ' + generatedCatGender + '\n     <br>Your fur color is ' + generatedFurColor + '\n     <br>Your eye color is ' + generatedEyeColor;

    modal.classList.add('is-active');

    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#fav-color').value = '';
    document.querySelector('#least-fav-color').value = '';
}

function generateCatFirstName(firstName) {
    var initial = firstName.substring(0, 1).toUpperCase();

    return catFirstName[initial][Math.floor(Math.random() * catFirstName[initial].length)];
}

function generateCatLastName(lastName) {
    var initial = lastName.substring(0, 1).toUpperCase();

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);