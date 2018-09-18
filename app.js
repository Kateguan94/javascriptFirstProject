// var cookiesAccepted = confirm('We use tasty cookies. Do you accept them?');
// if (cookiesAccepted)
if (true)
    showPage();
else
    showErrorPage();

function showPage() {
    document.getElementsByClassName('page')[0].classList.remove('hidden');
}

function showErrorPage() {
    document.getElementsByClassName('cookieError')[0].classList.remove('hidden');
}

var animalsCards = Array.from(document.getElementsByClassName('flip-container'));
var animalErrorElement = document.getElementsByClassName('animalError')[0];
document.forms[0].animal.addEventListener('input', function(event) {
    var inputElement = event.target;
    var inputText = inputElement.value.trim();
    var anyAnimalMatchesSearchCriteria = false;
    animalsCards.forEach(function(card) {
        var animalType = card.getAttribute('data-animal');
        if (animalType.startsWith(inputText)) {
            card.classList.remove('hidden');
            anyAnimalMatchesSearchCriteria = true;
        } else {
            card.classList.add('hidden');
        }
    });

    if (anyAnimalMatchesSearchCriteria) {
        animalErrorElement.classList.add('hidden');
    } else {
        animalErrorElement.textContent = 'Animal "' + inputText + '" doesn\'t exist in our database';
        animalErrorElement.classList.remove('hidden');
    }
});