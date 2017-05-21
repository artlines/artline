function Validator() {}

Validator.prototype = {
  errors: [],
  checkValidity: function(input) {
    var validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity('Неверный формат данных');
    }

    if (validity.rangeUnderflow) {
      var min = input.getAttribute('min');
      this.addInvalidity('Минимум ' + min);
    }

    if (validity.typeMismatch) {
      this.addInvalidity('Неверный формат данных');
    }
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function(message) {
    this.errors.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    return this.errors.join('. \n');
  },

  getInvaliditiesForHTML: function() {
    return this.errors.join('. <br>');
  }
};

module.exports = Validator;