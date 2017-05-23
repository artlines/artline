const xhrPost = require('./lib/xhr_post');
const formValidation = require('./lib/form_validation');
const userCreateForm = document.forms.userCreate;
const userCreateSubmit = userCreateForm.userCreateSubmit;

// Свежая кровь
userCreateSubmit.addEventListener('click', e => {
  let inputs = userCreateForm.elements;
  let url = "users/create";
  let data = formValidation(inputs);

  if (data.stopSubmit) {
    e.preventDefault();
  } else {
    xhrPost(data.checked, url);
  };
});

