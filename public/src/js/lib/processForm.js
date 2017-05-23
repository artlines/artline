module.exports.proccessForm = (form, done) => {
  var obj = form;
  var formData = new FormData();
  $.each($(obj).find("input[type='file']"), function(i, tag) {
    $.each($(tag)[0].files, function(i, file) {
      formData.append(tag.name, file);
    });
  });

  return formData;
};

