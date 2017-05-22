const Validator = require('./lib/validator');
const userCreateForm = document.forms.userCreate;
const userCreateSubmit = userCreateForm.userCreateSubmit;

// Свежая кровь
userCreateSubmit.addEventListener('click',(e) => {
  let stopSubmit = false;
  let inputs = userCreateForm.elements;
  let data = {};
  for (let i = 0, l = inputs.length; i < l; i++) {

    let input = inputs[i];
    if (input.name === 'userCreateSubmit') continue;
    // Проверим валидность поля
    if (input.checkValidity() == false) {
      let inputValidator = new Validator();
      inputValidator.checkValidity(input);
      let customValidityMessageForHTML = inputValidator.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      stopSubmit = true;
    }else{
      data[input.name] = input.value;
    }

  }

  if (stopSubmit) {
    e.preventDefault();
  }else {
    let xhr = new XMLHttpRequest();
    let dataJSON = JSON.stringify(data);
    xhr.open("POST", "users/create");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        userCreateForm.insertAdjacentHTML('afterend', '<p class="error-message">' + xhr.responseText + '</p>')
      }
      ;
    }

    xhr.send(dataJSON);
  };
});

