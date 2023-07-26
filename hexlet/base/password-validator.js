const hasNumber = (string) => string.search(/\d/) !== -1;

class PasswordValidator {
  constructor(options) {
    this.options = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...this.options, ...options };
  }
  result = {};

  validate(password) {
    if (password.length < this.options.minLength) {
      this.result.minLength = "too small";
    }

    if (!hasNumber(password) && this.options.containNumbers) {
      this.result.containNumbers = "should contain at least one number";
    }
    return this.result;
  }
}

const validator = new PasswordValidator();

console.log(validator.validate("q23ty"));
// console.log(validator.validate("q23ty'"));
// console.log(validator.validate("qwerty")); // { minLength: 'too small' }
