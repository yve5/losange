"use strict";

function displayDiamond(myCharacter) {
  let message = document.getElementById('message');

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
  
  let myCharCode = myCharacter.charCodeAt(0);
  let isALetter = false;

  if (myCharCode >= 97 && myCharCode <= 122) {
    isALetter = true;
    myCharacter = myCharacter.toUpperCase();
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
  
  let ACharCode = 97;
  let i = ACharCode;
  let incrementedLoop = true;
  let stopLoop = false;

  let result = document.getElementById('result');
  result.innerHTML = '';
  
  while (i <= myCharCode && i >= ACharCode) {
    let char2Display = String.fromCharCode(i);
    
    result.innerHTML += `\n`;
    for (let j = 0; j < (myCharCode - i); j++)
      result.innerHTML += `  `;
    result.innerHTML += char2Display;

    result.innerHTML += ` `;
    for (let j = 1; j < (i - ACharCode); j++)
      result.innerHTML += `  `;
    
    if (i !== ACharCode) {
      for (let j = 0; j < (i - ACharCode); j++)
        result.innerHTML += `  `;
      result.innerHTML += char2Display;
    }

    if (incrementedLoop && !stopLoop)
      i++;
    else
      i--;

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