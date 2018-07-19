"use strict";

/**
 * Diplay diamond from the character typed by the user.
 * 
 * @param String myCharacter 
 */
function displayDiamond(myCharacter) {
  // I check the input value.
  let message = document.getElementById('message');
  
  // Maybe he's empty
  if (myCharacter === '') {
    message.innerHTML = `Merci de remplir le champs texte.`;
    message.classList.remove('message--hide');
    message.classList.add('message--show');
    return;
  }
  else {
    message.classList.add('message--hide');
    message.classList.remove('message--show');
  }
  
  // Maybe he's not a ascii letter
  let myCharCode = myCharacter.charCodeAt(0);
  let isALetter = false;
  
  if (myCharCode >= 97 && myCharCode <= 122) {
    isALetter = true;
    // Related to exemples, I convert all lower-case letters to upper-case letters 
    myCharacter = myCharacter.toUpperCase();
    myCharCode = myCharacter.charCodeAt(0);
  }

  if (myCharCode >= 65 && myCharCode <= 90) {
    isALetter = true;
  }

  if (isALetter) {
    message.classList.add('message--hide');
    message.classList.remove('message--show');
  }
  else {
    message.innerHTML = `Merci de choisir une lettre de l'alphabet ASCII.`;
    message.classList.remove('message--hide');
    message.classList.add('message--show');
  }
  
  // I make and I display the diamond.
  let ACharCode = 65;
  let i = ACharCode;
  let incrementedLoop = true;
  let stopLoop = false;
  let emptySpace = `  `;
  
  // I clear the result area
  let result = document.getElementById('result');
  result.innerHTML = '';
  
  // This is a round-trip process.
  // I also increment and decrement the same index, in order to compose my diamond.
  while (i <= myCharCode && i >= ACharCode) {
    let char2Display = String.fromCharCode(i);
    
    // I display the character in relation to the position of others characters.
    result.innerHTML += `\n`;
    for (let j = 0; j < (myCharCode - i); j++)
      result.innerHTML += emptySpace;
    result.innerHTML += char2Display;

    // If it isn't the letter A, I display the second character.
    if (i !== ACharCode) {
      result.innerHTML += emptySpace.slice(0, -1);
      for (let j = 1; j < (i - ACharCode); j++)
        result.innerHTML += emptySpace;
    
      for (let j = 0; j < (i - ACharCode); j++)
        result.innerHTML += emptySpace;
      result.innerHTML += char2Display;
    }

    // The variable `stopLoop` enables to not do a second index incrementation.
    if (incrementedLoop && !stopLoop)
      i++;
    else
      i--;

    // Until I've reached the user character, I increment the index `i`.
    // When I reach the user character, I decrement the index `i`.
    if (i === myCharCode) {
      incrementedLoop = false;
      stopLoop = true;
    }
  }
}

document.getElementById('myCharacter').addEventListener('keyup', function (event) {
  displayDiamond(this.value);
}, false);

displayDiamond(document.getElementById('myCharacter').value);