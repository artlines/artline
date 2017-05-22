function formValidation(inputs) {
  const Validator = require('./validator');
  let data = {
    stopSubmit: false,
    checked: {}
  };

  for (let i = 0, l = inputs.length; i < l; i++) {
    let input = inputs[i];
    if (input.name === 'userCreateSubmit') continue;
    if (input.checkValidity() == false) {
      let inputValidator = new Validator();
      inputValidator.checkValidity(input);
      let customValidityMessageForHTML = inputValidator.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      data.stopSubmit = true;
    }else{
      data.checked[input.name] = input.value;
    }
  }
  return data;
}

module.exports = formValidation;