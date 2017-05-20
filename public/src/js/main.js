
let form = document.querySelector('#form');

// создать объект для формы
var formData = new FormData(document.forms.form);

/*// отослать
var xhr = new XMLHttpRequest();
xhr.open("POST", "users/create");
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  };
};
xhr.send();
xhr.send(formData);*/
